import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Tachyons from 'tachyons'

const Home = () => {
  return (
    <div>
      <main>
        <article className="bg-white tc">
          <Header />
          <div className="ph1 ph2-m ph3-l avenir">
            <div className="f4 f2-ns measure center">
              <h2 className="fw3 f1 fl w-100 black-70 mt0 mb1">
                Cullen Webster
              </h2>
              <p className="black-70 fw2 mt2 mb0 f6 pt3 f5-m f4-l tc">
                I am a Junior Full-Stack Developer, capable of building
                applications from the ground up - from concept and layout, to
                programming the front and back ends. Though I am brand new to
                this industry, I’m a fast learner, a hard worker, and I have the
                skills and the drive to be a valuable member of any team.
              </p>
              <p className="black-70 fw2 mt0 mb4 f6 pt3 f5-m f4-l tc">
                I’m currently seeking work as a Full-Stack Developer. I would
                like to join a team where I can continue to build on my current
                skills, and learn new ones! I have a lot of creativity to bring
                to the table and a willingness to build the skills it takes to
                unleash it.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Home
