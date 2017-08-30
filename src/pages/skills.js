import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Tachyons from 'tachyons'

const Skills = () => {
  return (
    <div>
      <Header />
      <article>
        <h2 className="f2 fw4 pa3 mv0 tc avenir black-70">Skills</h2>
        <div className="cf pa2">
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FJavaScript-01-min.jpg?1504057160053"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">JavaScript</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FReact-01-min.jpg?1504057161218"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">React</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FRedux-01-min.jpg?1504057161397"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">Redux</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FNode-JS-01-min.jpg?1504057160641"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">Node.js</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FRamda-01-min.jpg?1504057160959"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">Ramda</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2Frest-min.png?1504057158449"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">RESTful API</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FMySQL-01-min.jpg?1504057160478"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">MySQL</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FCouchDB-01-min.jpg?1504057158800"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">CouchDB</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FPouchDB-01-min.jpg?1504057160792"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">PouchDB</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FMongoDB-01-min.jpg?1504057160301"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">MongoDB</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FExpress-01-min.jpg?1504057159504"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">Express</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FGit-01-min.jpg?1504057159693"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">Git/GitHub</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FCSS-3-01-min.jpg?1504057159332"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">CSS</dd>
              </dl>
            </a>
          </div>

          <div className="fl w-50 w-25-m w-20-l pa2">
            <a className="db link dim tc">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FHTML-5-01-min.jpg?1504057159879"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100 tc">HTML</dd>
              </dl>
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}

export default Skills
