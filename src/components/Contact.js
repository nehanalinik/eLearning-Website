import React from "react";
import underline from "../images/underline.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
const Contact = () => {
  return (
    <section className="contacts">
      <div className="heading">
        <h2>Contact</h2>
        <div className="underline">
          <img src={underline} alt="underline" />
        </div>
        <h3>Have anything you wanna share with us?</h3>
        <p>Share it with us in the following way.</p>
      </div>
      <div className="content">
        <div className="contact_form">
          <div className="input_elements">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Topic of discussion" />
          </div>
          <div className="textarea_element">
            <textarea cols="20" rows="10" placeholder="Your Message"></textarea>
          </div>
          <button>Send</button>
        </div>
        <div className="contact_social">
          <h3>Or connect with us on</h3>
          <div className="social_icons">
            <FaFacebookSquare style={{ color: "#5AD3BE" }} size={28} />
            <FaTwitterSquare style={{ color: "#5AD3BE" }} size={28} />
            <FaInstagramSquare style={{ color: "#5AD3BE" }} size={28} />
            <FaGithubSquare style={{ color: "#5AD3BE" }} size={28} />
            <FaYoutubeSquare style={{ color: "#5AD3BE" }} size={28} />
          </div>
        </div>
      </div>
      <div className="bg_img"></div>
    </section>
  );
};

export default Contact;
