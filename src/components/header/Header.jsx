import "../header/header.css";

const Header = () => {
  return (
    
    <div className="header">
      <div className="header-content">
        <img src="./image.jpg" alt="bus-img" className="bus-img" />

        <div className="travel-inputs">
          <div className="from-input">
            <div className="from-small">
              <small>From</small>
              <i class="uil uil-angle-down from-arrow"></i>
            </div>
            <p className="from-city">Delhi, New Delhi,</p>
            <span className="country">India</span>
          </div>
          <div className="to-input">
            <div className="to-small">
              <small>To</small>
              <i class="uil uil-angle-down to-arrow"></i>
            </div>
            <p className="to-city">Delhi, New Delhi,</p>
            <span className="country">India</span>
          </div>
          <div className="travel-date">
            <div className="date-small">
              <small>Travel Date</small>
              <i class="uil uil-schedule calender"></i>
            </div>
            <p className="date">12 Nov 2022</p>
          </div>
        </div>
        <button className="search-btn">Search</button>
      </div>
      <div className="reviews">
        <h2>Reserve ticket with world largest bud booking flatform</h2>
        <div className="reviews-content">
          <div className="preview-content">
            <div className="preview-card">
              <img src="./image.jpg" alt="" />
              <div className="card-text">
                <p>2000 +</p>
                <small>Bus Collection</small>
              </div>
            </div>
            <div className="preview-card">
              <img src="./image.jpg" alt="" />
              <div className="card-text">
                <p>2 Millions</p>
                <small>Happy Customers Globally</small>
              </div>
            </div>
            <div className="preview-card">
              <img src="./image.jpg" alt="" />
              <div className="card-text">
                <p>5000 +</p>
                <small>Tickets Book Everyday</small>
              </div>
            </div>
          </div>
        </div>
        <h2>
          Here's what a few of our customers <br /> have to say about us
        </h2>
      </div>
      <div className="customer-rating">
        <div className="customer-rating-content">
          <div className="customer-rating-card">
            <div className="customer-details">
              <div className="customer-initial">
                <span>V</span>
              </div>
              <div className="customer-name">
                <p>Vatsal Agrawal</p>
                <span>customer since 2020</span>
              </div>
            </div>
            <div className="rating">
              <i class="uil uil-star start"></i>
              <small>4.5</small>
            </div>
            <div className="rating-desc">
              <small>
                Awesome travel experience with <br /> reserve. Excellent staff
              </small>
            </div>
          </div>
          <div className="customer-rating-card">
            <div className="customer-details">
              <div className="customer-initial">
                <span>V</span>
              </div>
              <div className="customer-name">
                <p>Vanya Agrawal</p>
                <span>customer since 2018</span>
              </div>
            </div>
            <div className="rating">
              <i class="uil uil-star start"></i>
              <small>4.5</small>
            </div>
            <div className="rating-desc">
              <small>
                Bus was clean and the journey was <br /> smooth. Reached on
                time.
              </small>
            </div>
          </div>

          <div className="customer-rating-card">
            <div className="customer-details">
              <div className="customer-initial">
                <span>S</span>
              </div>
              <div className="customer-name">
                <p>Seema Agrawal</p>
                <span>customer since 2018</span>
              </div>
            </div>
            <div className="rating">
              <i class="uil uil-star start"></i>
              <small>4.5</small>
            </div>
            <div className="rating-desc">
              <small>
                Bus was clean and the journey was <br /> smooth. Reached on
                time.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;
