import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={event => window.open("https://www.instagram.com/callumtremayne")} />
        <TwitterIcon onClick={event =>  window.open("https://www.twitter.com/callumtremayne")} />
        <FacebookIcon onClick={event =>  window.open("https://www.facebook.com/callumtremayne")} />
        <LinkedInIcon onClick={event =>  window.open("https://www.LinkedIn.com/in/callum-tremayne")}/>
        <GitHubIcon onClick={event =>  window.open("https://github.com/tremayne97")}/>
      </div>
      <p> &copy; 2022 | <Link to="/">SportsOrg.com</Link> | Created by Callum Tremayne for MSc Computing Final Year University Project</p>
    </div>
  );
}

export default Footer;