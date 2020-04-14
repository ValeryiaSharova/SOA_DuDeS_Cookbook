import React from 'react';
import { Link } from 'react-router-dom';
import { ModalConsumer } from '../../context/ModalContext';
import About from '../Dialogs/About/About';
import Contact from '../Dialogs/Contact/Contact';
import LogoutButton from './LogoutButton';

const Header = () => (
  <nav className="navbar nav-style navbar-expand-sm">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Ingredients
      </Link>
      <ModalConsumer>
        {({ showModal }) => (
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button type="button" className="btn btn-nav mt-1" onClick={() => showModal(About)}>
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-nav mt-1"
                  onClick={() => showModal(Contact)}
                >
                  Contact
                </button>
              </li>
            </ul>
            <ul className="navbar-nav navbar-right ml-auto">
              <li className="nav-item mr-2">
                {localStorage.getItem('token') ? <LogoutButton /> : null}
              </li>
            </ul>
          </div>
        )}
      </ModalConsumer>
    </div>
  </nav>
);

export default Header;
