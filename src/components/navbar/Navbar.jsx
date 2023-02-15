import "../navbar/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="reserve">
          <div className="logo">
            <i className="uil uil-bus-school bus-logo"></i>
            <span>RESERVE</span>
          </div>

          <a href="/" className="tck">
            Ticket
          </a>
          <a href="/" className="cont">
            Contact Us
          </a>
        </div>

        <div className="btns">
          <button className="nav-btn">Login</button>
          <button className="reg-btn">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;