import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        style={{
          background:
            'linear-gradient(180deg, rgba(94,94,94,0.5) 0%, rgba(0,0,0,0.5) 100%)',
        }}
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass} is-transparent`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item has-text-white" to="/">
                Головна
              </Link>
              <Link className="navbar-item has-text-white" to="/about">
                Про нас
              </Link>
              <Link className="navbar-item has-text-white" to="/products">
                Послуги
              </Link>
              <Link className="navbar-item has-text-white" to="/blog">
                Блог
              </Link>
              <Link className="navbar-item has-text-white" to="/contact">
                Контакти
              </Link>
              <Link
                className="navbar-item has-text-white"
                to="/contact/examples"
              >
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item number-z has-text-white"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>096 000 00 00</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
