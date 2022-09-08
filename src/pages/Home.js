import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../assets/Squad.png'
import '../styles/Home.css'

function Home() {
  return <div className="home"  style={{ backgroundImage: `url(${BannerImage})`}}>
    <div className="headerContainer">
      <h1> SportsOrg </h1>
      <p>Take the hard work <br /> out of teamwork </p>
      <Link to="/signup">
      <button>JOIN NOW</button>
      </Link>
    </div>
    </div>;
  
}

export default Home