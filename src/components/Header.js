import React from 'react'
import { Link } from 'react-router-dom'
// import { Nav, NavItem, NavLink } from 'reactstrap';

// The Header creates links that can be used to navigate
// between routes.

const Header = () => (
  <header>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/" style={Head}>Start Bootstrap</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li onClick={checkActive} className="nav-item active">
              <Link className="nav-link" to="/">Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li onClick={checkActive} className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li onClick={checkActive} className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li onClick={checkActive} className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br/><br/><br/><br/>
  </header>
)

const checkActive = ({currentTarget}) =>{
  currentTarget.parentElement.childNodes.forEach( ele=> ele.className = "nav-link");
  currentTarget.className="nav-link active";
}
const Head = {
  "fontSize" : "12px"
}
export default Header;