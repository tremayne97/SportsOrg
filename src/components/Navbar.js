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
            <a href='/'><img src={Logo}/></a>
            <div className="hiddenLinks">
              <Link to="/"> Home </Link>
              <Link to="/about"> About </Link>
              <Link to="/calendar"> Calendar </Link>
              <Link to="/chat"> Chat </Link>
              <Link to="/signup"> Sign In </Link>
              {/* <Link to="/logout"> Log Out </Link> */}
            </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/calendar"> Calendar </Link>
          <Link to="/chat"> Chat </Link>
          <Link to="/signup"> Sign In </Link>
          {/* <Link to="/logout"> Log Out </Link> */}
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
        
    </div>
  )
}

export default Navbar