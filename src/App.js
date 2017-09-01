import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Skills from './pages/skills'
import Education from './pages/education'
import Experience from './pages/experience'
import Contact from './pages/contact'
import Projects from './pages/projects'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
          <Route path="/education" component={Education} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
