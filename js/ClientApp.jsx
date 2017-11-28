import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Camping from './Camping'
import About from './About'
import Workout from './Workout'

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Sidebar />
      <Route exact path='/' component={Landing} />
      <Route exact path='/about' component={About} />
      <Route exact path='/camping' component={Camping} />
      <Route exact path='/workout' component={Workout} />
      <Footer />
    </div>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'))
