import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className="hiddenLinks">
              <Link to="/"> Home </Link>
              <Link to="/calendar"> Calendar </Link>
              <Link to="/chat"> Chat </Link>
              <Link to="/about"> About </Link>
              <Link to="/sigin"> Sign In </Link>
            </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/calendar"> Calendar </Link>
          <Link to="/chat"> Chat </Link>
          <Link to="/about"> About </Link>
          <Link to="/signin"> Sign In </Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
        
    </div>
  )
}

export default Navbar