import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages'
import SignIn from './pages/signin'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignIn} exact />
      </Switch>
    </Router>
  )
}

export default App
