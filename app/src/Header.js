// modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Header(props) {
  let date = new Date();
  let date_str = date.getHours() + ":" + date.getMinutes();
  return (
    <header className="header">
      <div>
        <Link to="/"><img className="logo" src="/img/logo.png" /></Link>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/marketplace">Marketplace</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/visual-art">Visual Art</Link>
            </li>
            <li>
              <Link to="/queer-resources">Queer Resources</Link>
            </li>
            <li>
              <Link to="/archive-projects">Archive Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {/*<span>{date_str}</span>*/}
        <nav className="nav socials">
          <ul>
            <li>
              <a href="https://instagram.com/uscfemfest" aria-label="Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;