import React from 'react'
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCompass from "@fortawesome/fontawesome-free-solid/faCompass";
import faPhone from "@fortawesome/fontawesome-free-solid/faPhone";
import faClock from "@fortawesome/fontawesome-free-solid/faClock";
import faEnvelope from "@fortawesome/fontawesome-free-solid/faEnvelope";

function Footer() {
    return (
      <footer className="bck_b_dark">
      <div className="container">
          <div className="logo">
              Credit Union
          </div>
          <div className="wrapper">
              <div className="left">
                  <h2>Contact information</h2>
                  <div className="business_nfo">
                      <div className="tag">
                          <FontAwesomeIcon
                              icon={faCompass}
                              className="icon"
                          />
                          <div className="nfo">
                              <div>Head Office Address</div>
                              <div>Commercial Avenue Bda Cameroon</div>
                          </div>
                      </div>
                      <div className="tag">
                          <FontAwesomeIcon
                              icon={faPhone}
                              className="icon"
                          />
                          <div className="nfo">
                              <div>Phone</div>
                              <div>+237 674809182</div>
                          </div>
                      </div>
                      <div className="tag">
                          <FontAwesomeIcon
                              icon={faClock}
                              className="icon"
                          />
                          <div className="nfo">
                              <div>Working hours</div>
                              <div>Mon-Fri/ 9am-5pm</div>
                          </div>
                      </div>
                      <div className="tag">
                          <FontAwesomeIcon
                              icon={faEnvelope}
                              className="icon"
                          />
                          <div className="nfo">
                              <div>Email</div>
                              <div>info@creditunion.com</div>
                          </div>
                      </div>
                  </div>
              </div> 
              <div className="left">
                  <h2>Be the first to know</h2>
                  <div>
                      <div>
                      Let us help you achieve your dreams.
                      </div>
                  </div>
              </div>      
          </div>
      </div>
  </footer>
);
};
export default Footer
