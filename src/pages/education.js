import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Tachyons from 'tachyons'

const Education = () => {
  return (
    <div>
      <Header />

      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 avenir">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc">
          Jack Russell Coding School
        </h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure tc">
            Full-Stack JavaScript Development Training
          </p>
          <p className="f6 f5-ns lh-copy measure tc">Mount Pleasant, SC</p>
        </div>
      </article>

      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 avenir">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc">
          Squalicum High School
        </h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure tc">Class of 2012</p>
          <p className="f6 f5-ns lh-copy measure tc">Bellingham, WA</p>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default Education
