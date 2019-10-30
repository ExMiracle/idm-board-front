import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Users from './users'
import Thread from './thread'
import Notfound from './notfound'

const routing = (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <hr />
            <center><h1>Anonymous Board</h1></center>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
