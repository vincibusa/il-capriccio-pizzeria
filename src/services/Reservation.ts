import { database } from '../firebase-config';


export interface Reservation {
  id?: string;
  fullName: string;
  phone: string;
  date: string;   // formato "YYYY-MM-DD"
  time: string;   // formato "HH:mm" (es. "19:00", "19:30", ecc.)
  seats: number;
  location: string; // Canicattini Bagni o Avola
  specialRequests?: string;
  status: 'pending' | 'accepted' | 'rejected';  // nuovo campo per lo stato
  email: string;  // nuovo campo per l'email
}

// Array costante con tutti gli orari desiderati
export const allTimes = [
  "19:00", "19:15", "19:30", "19:45", 
  "20:00", "20:15", "20:30", "20:45", 
  "21:00", "21:15", "21:30"
];

const MAX_RESERVATIONS_PER_SLOT = 100; // Impostiamo un valore globale

/**
 * Aggiunge una prenotazione, controllando che il numero totale di posti prenotati non superi il limite.
 */
export const addReservation = async (reservation: Reservation): Promise<string | null> => {
  try {
    // Somma i posti prenotati per quel turno nella data
    const reservationsRef = database.ref('reservations');
    const snapshot = await reservationsRef.orderByChild('date').equalTo(reservation.date).once('value');
    let totalSeats = 0;
    snapshot.forEach(childSnapshot => {
      const res: Reservation = childSnapshot.val();
      if (res.time === reservation.time) {
        totalSeats += res.seats;
      }
    });

    // Se superiamo il limite, genera un errore
    if (totalSeats + reservation.seats > MAX_RESERVATIONS_PER_SLOT) {
      throw new Error('Fascia oraria al completo');
    }

    // Aggiunge la prenotazione con stato pending di default
    const newReservationRef = reservationsRef.push();
    await newReservationRef.set({ ...reservation, status: 'pending' });
    return newReservationRef.key;
  } catch (error) {
    console.error('Errore durante l\'aggiunta della prenotazione: ', error);
    throw error;
  }
};

/**
 * Sottoscrizione in tempo reale alle prenotazioni.
 */
export const subscribeToReservations = (
  callback: (reservations: Reservation[]) => void
): (() => void) => {
  const reservationsRef = database.ref('reservations');
  const listener = reservationsRef.on('value', (snapshot) => {
    const reservations: Reservation[] = [];
    snapshot.forEach((childSnapshot) => {
      const reservation: Reservation = childSnapshot.val();
      reservation.id = childSnapshot.key ?? "";
      reservations.push(reservation);
    });
    callback(reservations);
  });
  return () => {
    reservationsRef.off('value', listener);
  };
};

/**
 * Aggiorna una prenotazione esistente.
 */
export const updateReservation = async (key: string, reservation: Reservation): Promise<void> => {
  try {
    const reservationRef = database.ref(`reservations/${key}`);
    await reservationRef.update(reservation);
  } catch (error) {
    console.error('Errore durante l\'aggiornamento della prenotazione: ', error);
    throw error;
  }
};

/**
 * Elimina una prenotazione dato il suo key.
 */
export const deleteReservation = async (key: string): Promise<void> => {
  try {
    const reservationRef = database.ref(`reservations/${key}`);
    await reservationRef.remove();
  } catch (error) {
    console.error('Errore durante l\'eliminazione della prenotazione: ', error);
    throw error;
  }
};

/**
 * Accetta una prenotazione e invia email di conferma
 */
export const acceptReservation = async (key: string, reservation: Reservation): Promise<void> => {
  try {
    const reservationRef = database.ref(`reservations/${key}`);
    await reservationRef.update({ ...reservation, status: 'accepted' });
  } catch (error) {
    console.error('Errore durante l\'accettazione della prenotazione: ', error);
    throw error;
  }
};

/**
 * Rifiuta una prenotazione
 */
export const rejectReservation = async (key: string, reservation: Reservation): Promise<void> => {
  try {
    const reservationRef = database.ref(`reservations/${key}`);
    await reservationRef.update({ ...reservation, status: 'rejected' });
  } catch (error) {
    console.error('Errore durante il rifiuto della prenotazione: ', error);
    throw error;
  }
};