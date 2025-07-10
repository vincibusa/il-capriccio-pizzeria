// src/pages/ReservationPage.tsx
import React, { useState, useCallback, useEffect, ChangeEvent } from "react";
import { FiEdit2, FiTrash2, FiCalendar, FiClock, FiUsers, FiCheck, FiX } from "react-icons/fi";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
import {
  Reservation,
  subscribeToReservations,
  updateReservation,
  deleteReservation,
  acceptReservation,
  rejectReservation
} from "../services/Reservation";
import ReservationModalEdit from "../components/ReservationModalEdit";

const ReservationPage: React.FC = () => {
  // Stati per le prenotazioni e la data selezionata
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(format(new Date(), "yyyy-MM-dd"));

  // Stati per modale edit e delete
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);

  useEffect(() => {
    if(localStorage.getItem("isAuthenticated") === "false" || localStorage.getItem("isAuthenticated") === null) {
      window.location.href = "/login";
    }
  }, []);

  // Sottoscrizione in tempo reale alle prenotazioni
  useEffect(() => {
    const unsubscribe = subscribeToReservations((reservationsData) => {
      setReservations(reservationsData);
    });
    return () => unsubscribe();
  }, []);

  // Non carichiamo più i turni

  // Filtra le prenotazioni in base alla data selezionata
  const filteredReservations = reservations.filter(
    (reservation) => reservation.date === selectedDate
  );

  // Gestione della modifica: apre la modale con i dati della prenotazione da modificare
  const handleEdit = useCallback((reservation: Reservation) => {
    setSelectedReservation(reservation);
    setIsEditModalOpen(true);
  }, []);

  // Gestione della cancellazione: apre la modale di conferma
  const handleDelete = useCallback((reservation: Reservation) => {
    setSelectedReservation(reservation);
    setIsDeleteModalOpen(true);
  }, []);

  const handleConfirmDelete = useCallback(async () => {
    if (selectedReservation && selectedReservation.id) {
      try {
        await deleteReservation(selectedReservation.id);
        toast.success("Prenotazione eliminata con successo");
        setIsDeleteModalOpen(false);
      } catch (error) {
        toast.error("Errore nella cancellazione della prenotazione");
      }
    } else {
      toast.error("ID prenotazione non definito");
    }
  }, [selectedReservation]);

  // Gestione della modifica della data
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  // Rimuoviamo la gestione dei turni

  const handleAccept = useCallback(async (reservation: Reservation) => {
    try {
      await acceptReservation(reservation.id!, reservation);
      
      // Invia email di conferma
      const templateParams = {
        to_name: reservation.fullName,
        to_email: reservation.email,
        reservation_date: format(new Date(reservation.date), "dd/MM/yyyy"),
        reservation_time: reservation.time,
        seats: reservation.seats
      };

      await emailjs.send(
        'service_jlzz6px',
        'template_5ltxf0t',
        templateParams,
        'iIz1ynV6Pc7STPfuf'
      );

      toast.success("Prenotazione accettata e email di conferma inviata");
    } catch (error) {
      toast.error("Errore nell'accettazione della prenotazione");
      console.error(error);
    }
  }, []);

  const handleReject = useCallback(async (reservation: Reservation) => {
    try {
      await rejectReservation(reservation.id!, reservation);
      
      // Invia email di rifiuto
      const templateParams = {
        to_name: reservation.fullName,
        to_email: reservation.email,
        reservation_date: format(new Date(reservation.date), "dd/MM/yyyy"),
        reservation_time: reservation.time,
        seats: reservation.seats
      };

      await emailjs.send(
        'service_jlzz6px',
        'template_3cehio9',
        templateParams,
        'iIz1ynV6Pc7STPfuf'
      );

      toast.success("Prenotazione rifiutata e email di notifica inviata");
    } catch (error) {
      toast.error("Errore nel rifiuto della prenotazione");
      console.error(error);
    }
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header: titolo, selezione data e gestione dei turni */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-pizza-red mb-4 md:mb-0">Gestione Prenotazioni</h1>
          <div className="flex items-center space-x-4">
            <FiCalendar className="text-pizza-red" />
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="p-2 border rounded"
            />
          </div>
        </div>

        {/* Rimuoviamo la sezione di gestione turni */}

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-pizza-brown mb-4">
            Prenotazioni per il {format(new Date(selectedDate), "dd/MM/yyyy")}
          </h2>
          {filteredReservations.length > 0 ? (
            filteredReservations.map((reservation) => (
              <div key={reservation.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {reservation.fullName}
                    </h3>
                    <p className="text-gray-600">{reservation.phone}</p>
                    <p className="text-gray-600">{reservation.email}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                      reservation.status === 'accepted' ? 'bg-green-100 text-green-800' :
                      reservation.status === 'rejected' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {reservation.status === 'accepted' ? 'Accettata' :
                       reservation.status === 'rejected' ? 'Rifiutata' :
                       'In attesa'}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {(!reservation.status || reservation.status === 'pending') && (
                      <>
                        <button
                          onClick={() => handleAccept(reservation)}
                          className="p-2 text-green-600 hover:bg-green-600 hover:text-white rounded-full transition-all duration-200"
                          title="Accetta prenotazione"
                        >
                          <FiCheck className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleReject(reservation)}
                          className="p-2 text-red-600 hover:bg-red-600 hover:text-white rounded-full transition-all duration-200"
                          title="Rifiuta prenotazione"
                        >
                          <FiX className="w-5 h-5" />
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleEdit(reservation)}
                      className="p-2 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-200"
                      title="Modifica prenotazione"
                    >
                      <FiEdit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(reservation)}
                      className="p-2 text-red-600 hover:bg-red-600 hover:text-white rounded-full transition-all duration-200"
                      title="Elimina prenotazione"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {/* Dettagli della prenotazione */}
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <FiCalendar className="mr-2" />
                    <span>{format(new Date(reservation.date), "dd/MM/yyyy")}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiClock className="mr-2" />
                    <span>{reservation.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiUsers className="mr-2" />
                    <span>{reservation.seats} {reservation.seats === 1 ? 'persona' : 'persone'}</span>
                  </div>
                  {reservation.specialRequests && (
                    <div className="mt-2 text-gray-600 bg-gray-50 p-2 rounded-md">
                      <span className="block font-medium">Note speciali:</span>
                      <span>{reservation.specialRequests}</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="md:col-span-2 lg:col-span-3 text-center py-16 text-gray-500">
              Non ci sono prenotazioni per questa data.
            </div>
          )}
        </div>

        {/* Modal per modifica, usando ReservationModal */}
        {isEditModalOpen && selectedReservation && (
          <ReservationModalEdit
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            reservation={selectedReservation}
            onSubmit={async (updatedReservation) => {
              if (selectedReservation.id) {
                await updateReservation(selectedReservation.id, updatedReservation);
                toast.success("Prenotazione aggiornata con successo");
              }
              setIsEditModalOpen(false);
            }}
          />
        )}

        {/* Modal per conferma eliminazione */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Conferma eliminazione</h2>
              <p className="text-gray-600 mb-6">
                Sei sicuro di voler eliminare questa prenotazione?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Annulla
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Elimina
                </button>
              </div>
            </div>
          </div>
        )}

        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default ReservationPage;