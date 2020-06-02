import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import Socials from './Socials'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Голвна
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Про нас
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Послуги
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Блог
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Контакти
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <Socials />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
