import React from "react";
import "./Contact.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your email..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
            <FacebookIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
            <WhatsAppIcon/>
            <XIcon/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
