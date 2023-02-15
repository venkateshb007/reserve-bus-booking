import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import "./home.css";
import Cards from "../../components/cards/Cards";

const Home_page = () => {
  return (
    <div>
      <div className="home">
        <div className="nav">
          <Navbar />
        </div>
        <div className="main">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="cards">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
};

export default Home_page;
