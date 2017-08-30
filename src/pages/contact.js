import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Tachyons from 'tachyons'

const Contact = () => {
  return (
    <div>
      <Header />
      <div>
        <article className="pv3 b--black-10 ph3 ph0-l avenir tc">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <p className="f5 f4-l lh-copy">
                <p className="f6 f5-l fw3 black-70 dim dib ph4-l">
                  cwebsterzornes@live.com
                </p>
              </p>

              <p className="f5 f4-l lh-copy">
                <p className="f6 f5-l fw3 black-70 dim dib ph4-l">
                  307.277.4345
                </p>
              </p>

              <p className="f5 f4-l lh-copy">
                <p className="f6 f5-l fw3 black-70 dim dib ph4-l">
                  Charleston, SC
                </p>
              </p>
            </div>
            <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
              <img
                src="https://cdn.glitch.com/c5bbc46a-f916-4484-9867-45b388ed5ac1%2FScreen%20Shot%202017-08-28%20at%205.25.18%20PM%20copy-min.png?1504057490496"
                className="db bg-right"
              />
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
