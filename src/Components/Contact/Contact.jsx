import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import facebook_icon from "../../assets/facebook.png";
import instagram_icon from "../../assets/instagram.png";
import twitter_icon from "../../assets/twitter.png";
import tiktok_icon from "../../assets/tiktok.png";
import youtube_icon from "../../assets/youtube.png";
import github_icon from "../../assets/github.png";
import linkedin_icon from "../../assets/linkedin.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e10bf62b-46f8-47d4-afd4-d393169e6662");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently avaliable to take on new project, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
          <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>
                <a href="mailto:bimalchaudhary014@gmail.com" target="_blank" rel="noopener noreferrer">
                  Email
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+977 9865447501</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bhimdatta-02,Kanchapur,Far-West Nepal</p>
            </div>
            <div className="contact-detail">
        <img src={facebook_icon} alt="Facebook Icon" />
        <p><a href="https://www.facebook.com/Bimal.Chaudhary.2058" target="_blank" rel="noopener noreferrer">Facebook</a></p>
      </div>

      <div className="contact-detail">
        <img src={instagram_icon} alt="Instagram Icon" />
        <p><a href="https://www.instagram.com/bimaldhamlauwha" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      </div>

      <div className="contact-detail">
        <img src={twitter_icon} alt="Twitter Icon" />
        <p><a href="https://www.twitter.com/VimalCh10975830" target="_blank" rel="noopener noreferrer">Twitter</a></p>
      </div>

      <div className="contact-detail">
        <img src={tiktok_icon} alt="TikTok Icon" />
        <p><a href="https://www.tiktok.com/@bimal5555555" target="_blank" rel="noopener noreferrer">TikTok</a></p>
      </div>

      <div className="contact-detail">
        <img src={youtube_icon} alt="YouTube Icon" />
        <p><a href="https://www.youtube.com/@dhamlauwha8568" target="_blank" rel="noopener noreferrer">YouTube</a></p>
      </div>

      <div className="contact-detail">
        <img src={github_icon} alt="GitHub Icon" />
        <p><a href="https://github.com/BimalChaudhary" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>

      <div className="contact-detail">
        <img src={linkedin_icon} alt="LinkedIn Icon" />
        <p><a href="https://www.linkedin.com/in/bimalchaudhary/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your name" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter Your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
