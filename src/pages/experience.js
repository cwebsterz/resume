import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Tachyons from 'tachyons'

const Experience = () => {
  return (
    <div>
      <Header />

      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 avenir">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc">
          Natural Grocers
        </h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure tc">
            10.28.16 – 01.28.17 | Cashier
          </p>
          <p className="f6 f5-ns lh-copy measure tc">E 2nd St, Casper, WY</p>
        </div>
      </article>

      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 avenir">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc">
          T-Mobile USA
        </h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure tc">
            10.12.15 – 09.24.16 | Customer Service Representative - Messaging
          </p>
          <p className="f6 f5-ns lh-copy measure tc">
            480 W. Bakerview Rd, Bellingham, WA
          </p>
        </div>
      </article>

      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 avenir">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc">
          Best Buy
        </h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure tc">
            10.25.13 – 10.10.15 | Multi-Channel Sales Associate
          </p>
          <p className="f6 f5-ns lh-copy measure tc">
            4281 Meridian St, Bellingham, WA
          </p>
        </div>
      </article>

      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 avenir">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc">
          Fred Meyer
        </h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure tc">
            05.25.12 – 10.04.13 | Person In Charge/Customer Service Associate
          </p>
          <p className="f6 f5-ns lh-copy measure tc">
            1225 W. Bakerview Rd, Bellingham, WA
          </p>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default Experience
