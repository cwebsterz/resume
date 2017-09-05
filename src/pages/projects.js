import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Tachyons from 'tachyons'

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="avenir">
        <ul className="list pl0 mt0 measure center">
          <a
            href="https://github.com/cwebsterz/resume"
            className="f6 link black-70"
          >
            <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 dim">
              <img
                className="w3 h2 w4-ns h3-ns ba b--black-40 br-80"
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FScreen%20Shot%202017-08-31%20at%201.26.40%20PM-min.png?1504200473965"
              />
              <div className="pl3 flex-auto">
                <span className="f6 db black-70">Resume Project</span>
                <span className="f6 db black-70">GitHub Repo</span>
              </div>
              <div>
                <i className="db tc black-70 grow h2 w2 ion-social-github" />
              </div>
            </li>
          </a>

          <a
            href="https://github.com/cwebsterz/diamond-nets-functional-mockup"
            className="f6 link black-70"
          >
            <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 dim">
              <img
                className="w3 h2 w4-ns h3-ns ba b--black-40 br-80"
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FScreen%20Shot%202017-09-05%20at%2011.42.00%20AM-min.png?1504626186655"
              />
              <div className="pl3 flex-auto">
                <span className="f6 db black-70">Diamond Nets Mockup</span>
                <span className="f6 db black-70">GitHub Repo</span>
              </div>
              <div>
                <i className="db tc black-70 grow h2 w2 ion-social-github" />
              </div>
            </li>
          </a>

          <a
            href="https://github.com/cwebsterz/js-drum-kit-JS30"
            className="f6 link black-70"
          >
            <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 dim">
              <img
                className="w3 h2 w4-ns h3-ns ba b--black-40 br-80"
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FScreen%20Shot%202017-08-31%20at%2012.46.34%20PM-min.png?1504199061249"
              />
              <div className="pl3 flex-auto">
                <span className="f6 db black-70">
                  #JavaScript30 Day 1 - JS Drum Kit
                </span>
                <span className="f6 db black-70">GitHub Repo</span>
              </div>
              <div>
                <i className="db tc black-70 grow h2 w2 ion-social-github" />
              </div>
            </li>
          </a>

          <a
            href="https://github.com/cwebsterz/crate"
            className="f6 link black-70"
          >
            <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 dim">
              <img
                className="w3 h2 w4-ns h3-ns ba b--black-70 dim br-80"
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FScreen%20Shot%202017-08-31%20at%201.31.54%20PM-min.png?1504208220990"
              />
              <div className="pl3 flex-auto">
                <span className="f6 db black-70">
                  Crate - Vinyl Collection App
                </span>
                <span className="f6 db black-70">
                  GitHub Repo (Work in Progress)
                </span>
              </div>
              <div>
                <i className="db tc black-70 grow h2 w2 ion-social-github" />
              </div>
            </li>
          </a>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
