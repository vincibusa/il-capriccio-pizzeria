import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import ReservationPage from "./Pages/ReservationPage";

import Footer from "./components/Footer";
import ContentWrapper from "./components/ContentWrapper";
import { NavbarProvider } from "./contexts/NavbarContenxt";

import LanguageSelector from "./components/LanguageSelector";
import LoginPage from "./Pages/LoginPage";
import SEOSchema from "./components/SEOSchema";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";


  // Determina quale schema usare in base alla pagina corrente
  const getSchemaType = (): "article" | "menu" | "restaurant" => {
    return "restaurant";
  };

  return (
    <NavbarProvider>
      {/* Mostra la navbar solo se non è la pagina di login */}
      {!isLoginPage && <Navbar />}
      
      {/* Aggiungi il componente SEOSchema per i dati strutturati */}
      <SEOSchema type={getSchemaType()} />
      
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ContentWrapper>
      
      {/* Mostra il selettore di lingua e il footer solo se non è la pagina di login */}
      {!isLoginPage && <LanguageSelector />}
      {!isLoginPage && <Footer />}
    </NavbarProvider>
  );
}

export default App;