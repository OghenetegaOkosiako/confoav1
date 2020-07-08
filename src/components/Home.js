import React from "react";

function Home() {
  return (
    <div>
      <section id="mainSec">
        <main id="mainImg">
          <div>
            <h2>Find Conferences</h2>
            <input type="text" />

            <img src="search.png" alt="search" />

            <p>
              And meet diverse like minded individuals with similar interests
            </p>
          </div>
        </main>
      </section>
      {/*Explore Section*/}
      <section>
        <div id="explore">
          <h3>
            Explore <span>All Conferences </span>
          </h3>
        </div>
        <div id="interest">
          <h3>What are your interests?</h3>
          <p>Explore top conferences globally</p>
        </div>
        <div className="row" id="conferences">
          <div className="col-sm-3">
            <div className="card">
              <img src="../ai.jpg" alt="science" height="300px" />
              <hr />
              <h5 className="card-title">Artificial Intelligence</h5>
              <p className="card-text">
                In this category you will find all conferences that are related
                to the Artificial Intelligene field
              </p>
              <a href="#" className="btn btn-danger conferencesBTN">
                See More
              </a>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card">
              <img src="../software.jpg" alt="science" height="300px" />
              <hr />
              <h5 className="card-title">Software Development</h5>
              <p className="card-text">
                In this category you will find all conferences that are related
                to Software Development
              </p>
              <a href="#" className="btn btn-danger conferencesBTN">
                See More
              </a>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card">
              <img src="../cloud.jpg" alt="science" height="300px" />
              <hr />
              <h5 className="card-title">Cloud Computing</h5>
              <p className="card-text">
                In this category you will find all conferences that are related
                to Cloud Computing
              </p>

              <a href="#" className="btn btn-danger conferencesBTN">
                See More
              </a>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <img src="../everything.jpg" alt="science" height="300px" />
              <hr />
              <h5 className="card-title">General</h5>
              <p className="card-text">
                In this category you will find all general conferences in they
                system that is not tailored to any specific field
              </p>

              <a href="#" className="btn btn-danger conferencesBTN">
                See More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*About Section*/}
      <section>
        <div id="about">
          <h2>About Us</h2>
          <p>
            confOAV is a conference managment application designed to assist
            conference organizers, attendees and speakers have seamless
            experience with thier conferneces both from the planning to
            finninshing stage by automating repeated task. Organizers can create
            conferences while attendees can find and register for conferences
            they want to attened.
          </p>
        </div>
      </section>
      {/*Footer Section*/}
      <section>
        <hr />
        <div id="contact">
          <a href="#">
            <img
              src="https://image.flaticon.com/icons/svg/733/733547.svg"
              className="contact-link"
              alt="facebook"
            />
          </a>

          <a href="https://github.com/Tegz1" id="profile-link" target="_blank">
            <img
              src="https://image.flaticon.com/icons/svg/270/270798.svg"
              className="contact-link"
            />
          </a>

          <a href="#">
            <img
              src="https://image.flaticon.com/icons/svg/1409/1409937.svg"
              className="contact-link"
              alt="twitter"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/oghenetega-okosiako-19480719b/"
            target="blank"
          >
            <img
              src="https://cutt.ly/2tp26g2"
              className="contact-link"
              alt="LinkedIn"
            />
          </a>

          <a href="#">
            <img
              src="https://image.flaticon.com/icons/svg/2165/2165144.svg"
              className="contact-link"
              alt="call me"
            />
          </a>
        </div>

        <hr />
        <footer>
          <p>
            {" "}
            All rights reserved{" "}
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> Oghenetega
            2020
          </p>
        </footer>
      </section>
    </div>
  );
}

export default Home;
