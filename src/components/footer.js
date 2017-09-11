import React from 'react'
import Tachyons from 'tachyons'

const Footer = () => {
  return (
    <footer className="ph3 ph4-ns pv1 bt b--black-10 black-70">
      <div className="mt1 tc">
        <a
          href="https://www.github.com/cwebsterz"
          title="GitHub"
          className="f4 dib pr2 black-70 link hover-black-70 dim"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/cullen-webster-989711148/"
          title="LinkedIn"
          className="f4 dib pr2 black-70 link hover-black-70 dim"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/CullenWebster"
          title="Twitter"
          className="f4 dib pr2 black-70 link hover-black-70 dim"
        >
          Twitter
        </a>
        <a
          href="https://glitch.com/@CullenWebster"
          title="Glitch"
          className="f4 dib pr2 black-70 link hover-black-70 dim"
        >
          Glitch
        </a>
      </div>
    </footer>
  )
}

export default Footer
