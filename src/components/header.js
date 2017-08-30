import React from 'react'
import { Link } from 'react-router-dom'
import Tachyons from 'tachyons'

const Header = () => {
  return (
    <div>
      <div className="vh-60 cover bg-center tc">
        <img src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2Fbg-min.jpg?1504057490077" />
      </div>

      <div className="bg-white black-70 tc pv2 avenir">
        <nav className="bt bb tc mw7 center mt0">
          <Link to="/">
            <a className="f6 f5-l link bg-animate black-70 hover-bg-black-70 hover-white dib pa3 ph4-l">
              Home
            </a>
          </Link>
          <Link to="/skills">
            <a className="f6 f5-l link bg-animate black-70 hover-bg-black-70 hover-white dib pa3 ph4-l">
              Skills
            </a>
          </Link>
          <Link to="/education">
            <a className="f6 f5-l link bg-animate black-70 hover-bg-black-70 hover-white dib pa3 ph4-l">
              Education
            </a>
          </Link>
          <Link to="/experience">
            <a className="f6 f5-l link bg-animate black-70 hover-bg-black-70 hover-white dib pa3 ph4-l">
              Experience
            </a>
          </Link>
          <Link to="/contact">
            <a className="f6 f5-l link bg-animate black-70 hover-bg-black-70 hover-white dib pa3 ph4-l">
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
