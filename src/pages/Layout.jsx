import Navbar from "../components/nav/Navbar";
import Footer from "../components/foter/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import Popup from "../components/popup/PopUp";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(true); // always open
  };

  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <div className="relative h-auto">
        <Outlet context={{ handleOrderPopup }} />
      </div>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;
