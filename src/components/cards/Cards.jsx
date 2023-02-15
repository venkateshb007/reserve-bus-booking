import React from "react";
import "./cards.css";

function Cards() {
  return (
    <div className="busdetail-card">
      <div className="left-card">
        <div className="bus-details">
          <div className="bus-name">
            <p>InterCity Smart Bus</p>
          </div>
          <div>
            <div className="bus-rating">
              <i class="uil uil-star"></i>
              <span>4.5</span>
            </div>
          </div>
          <div>
            <small>Ratings</small>
          </div>
        </div>
        <div className="bus-amenities">
          <div>
            <p>A/C Sleeper(2+1) | 24 Seats Left | 0 window seat</p>
          </div>
        </div>
        <div className="bus-timing">
          <div>
            <p>24:45, 16 NOV</p>
          </div>
          <div>
            <p>24:45, 16 NOV</p>
          </div>
          <div>
            <p>24:45, 16 NOV</p>
          </div>
        </div>
        <div className="extra-details">
          <a href="/">
            <p>Live Tracking</p>
          </a>
          <a href="/">
            <p>Live Tracking</p>
          </a>
          <a href="/">
            <p>Live Tracking</p>
          </a>
          <a href="/">
            <p>Live Tracking</p>
          </a>
          <a href="/">
            <p>Live Tracking</p>
          </a>
        </div>
      </div>
      <div className="right-card">
        <h4>Trip Cost</h4>
        <span>Starting from</span>
        <h2>Rs.899</h2>
        <button className="viewseat-btn">View Seat</button>
      </div>
    </div>
  );
}

export default Cards;
