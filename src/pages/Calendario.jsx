import React from "react";
import CalendarioBateYBarrio from "../components/CalendarioBateYBarrio";
import Footer from "../components/Footer";

function Calendario() {
  return (
    <>
      {/* La Navbar ya está incluida globalmente en App.jsx */}
      <CalendarioBateYBarrio />
      <Footer />
    </>
  );
}

export default Calendario;