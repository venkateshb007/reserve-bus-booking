import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <div className="filter-group">
        <div className="filter">
          <a href="/">Filter</a>
        </div>
        <div className="clear">
          <a href="/">Clear All</a>
        </div>
      </div>
      <div className="departure-group">
        <div className="departure">
        <div className="heading">Departure Time</div>
        <div className="session"><input type="checkbox" /> Morning Session</div>
        <div className="session"><input type="checkbox" /> Afternoon Session</div>
        <div className="session"><input type="checkbox" /> Evening Session</div>
        </div>
        <hr />
        <div className="departure">
        <div className="heading">Arrival Time</div>
        <div className="session"><input type="checkbox" /> Morning Session</div>
        <div className="session"><input type="checkbox" /> Afternoon Session</div>
        <div className="session"><input type="checkbox" /> Evening Session</div>
        </div>
        <hr />
        <div className="select-1">
          <select name="pickup" id="pickup">
            <option value="1">Pickup Point</option>
            <option value="2">Drop Point</option>
            <option value="3">Bus Operator</option>
          </select>
          <div className="search"><input type="search" /></div>
          <div className="radio">
            <input type="radio" /> Kolkata
          </div>
          <div className="radio">
            <input type="radio" /> Mumbai
          </div>
          <div className="radio">
            <input type="radio" /> Bengaluru
          </div>
        </div>
        <hr />
        <div className="select-2">
          <select name="pickup" id="pickup">
            <option value="1">Drop Point</option>
            <option value="2">Pickup Point</option>
            <option value="3">Bus Operator</option>
          </select>
          <div className="search"><input type="search" /></div>
          <div className="radio">
            <input type="radio" /> Kolkata
          </div>
          <div className="radio">
            <input type="radio" /> Mumbai
          </div>
          <div className="radio">
            <input type="radio" /> Bengaluru
          </div>
        </div>
        <hr />
        <div className="rating">
          <div className="head">Bus Rating</div>
          <div className="rating-check">
            <input type="checkbox" /> 4 star or more
          </div>
          <div className="rating-check">
            <input type="checkbox" /> 3 star or more
          </div>
          <div className="rating-check">
            <input type="checkbox" /> 0-2 star
          </div>
        </div>
        <hr />
        <div className="select-3">
          <select name="bus-op" id="bus-op">
            <option value="1">Bus Operator</option>
            <option value="2">Pickup Point</option>
            <option value="3">Drop Point</option>
          </select>
          <div className="search"><input type="search" /></div>
          <div className="operator">
            <input type="checkbox" /> Zing bus
          </div>
          <div className="operator">
            <input type="checkbox" /> Intercity smart
          </div>
          <div className="operator">
            <input type="checkbox" /> Solar exp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
