import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing'

const App = () => (
  <BrowserRouter>
    <Switch>
      <div className='app'>
        <Route exact path='/' component={Landing} />
      </div>
    </Switch>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'))
