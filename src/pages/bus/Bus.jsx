import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./bus.css";
import Header from "../../components/header/Header";

const Bus = () => {
  return (
    <div>
      <div className="home">
        <div className="nav">
          <Navbar />
        </div>
        <div className="main">
         <Header/>
          
        </div>
      </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  )
}

export default Bus
