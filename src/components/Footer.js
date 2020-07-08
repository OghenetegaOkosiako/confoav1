import React from "react";

function Footer() {
  return (
    <>
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
    </>
  );
}

export default Footer;
