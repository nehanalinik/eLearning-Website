import React from "react";
import underline from "../images/underline.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
const Contact = () => {
  return (
    <section className="contacts" id="contact">
      <div className="heading">
        <h2>Contact</h2>
        <div className="underline">
          <img src={underline} alt="underline" />
        </div>
        <h3>Have anything you wanna share with us?</h3>
        <p>Share it with us in the following way.</p>
      </div>
      <div className="content">
        <form className="contact_form">
          <div className="input_elements">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Topic of discussion" />
          </div>
          <div className="textarea_element">
            <textarea cols="20" rows="10" placeholder="Your Message"></textarea>
          </div>
          <div className="btn_element">
            <button>Send</button>
          </div>
        </form>
        <div className="contact_social">
          <h3>Or connect with us on</h3>
          <div className="social_icons">
            <FaFacebookSquare
              style={{ color: "#646464" }}
              size={28}
              className="socialicon"
            />
            <FaTwitterSquare
              style={{ color: "#646464" }}
              size={28}
              className="socialicon"
            />
            <FaInstagramSquare
              style={{ color: "#646464" }}
              size={28}
              className="socialicon"
            />
            <FaGithubSquare
              style={{ color: "#646464" }}
              size={28}
              className="socialicon"
            />
            <BsDiscord
              style={{ color: "#646464" }}
              size={27.5}
              className="socialicon"
            />
            <FaYoutubeSquare
              style={{ color: "#646464" }}
              size={28}
              className="socialicon"
            />
          </div>
        </div>
      </div>
      <div className="bg_img"></div>
    </section>
  );
};

export default Contact;
