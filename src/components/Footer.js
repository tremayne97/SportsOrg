import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={event =>  window.location.href='https://www.instagram.com/callumtremayne'} />
        <TwitterIcon onClick={event =>  window.location.href='https://www.twitter.com/callumtremayne'} />
        <FacebookIcon onClick={event =>  window.location.href='https://www.facebook.com/callumtremayne'} />
        <LinkedInIcon onClick={event =>  window.location.href='https://www.LinkedIn.com/in/callum-tremayne'}/>
      </div>
      <p> &copy; 2022 | <Link to="/">SportsOrg.com</Link> | Created by Callum Tremayne</p>
    </div>
  );
}

export default Footer;