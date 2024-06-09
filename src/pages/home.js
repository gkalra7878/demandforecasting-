import React from 'react';


function Home() {
  return (
    <div className="bg-image">
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex justify-content-end">
              <img src="images/adlogo.png" alt="ad logo" />
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-end">
              <div className="d-flex flex-column gap-3 textcolor">
                <p>Login to Get Forecast</p>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <a href="#">
                  <img src="images/arrow.png" alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
