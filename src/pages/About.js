import React from 'react'
import image from '../assets/Logo4.png'
import image2 from '../assets/GitHub.png'
import '../styles/About.css'

function About() {
  return <div className="home">
    <div className="headerContainer">
     <img className='img-1' src={image} />
      <h2> Welcome to SportsOrg </h2>
      <h3>This application has been created for the final dissertation project for the completion of MSc in Computing. <br/> The purpose of this application is to assist the communicational issues with sports teams and hopes to be used for in a means of delivering effective communication. <br/> The title for the research project:</h3>
      <h2>"An Investigation into the Development of a Web Application to Improve the Effectiveness of Online Communication"</h2>
      <h3><i>The full source code can be found at my GitHub Repository. Click the icon below. <u>For educational purposes only.</u></i></h3>
      <div className="socialMedia">
      <img className='git-img' src={image2} onClick={event => window.open("https://github.com/tremayne97/SportsOrg")} />
      </div>
    </div>
    </div>;
  
}

export default About