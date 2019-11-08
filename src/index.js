import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import App from './App'
import Thread from './thread'

const Page = () => (
  <div>
    <Header/>
    <Main/>
  </div>
)

const Header = () => (
  <header>
    <nav>
      <Link to='/'>
        <center><h1 className="text-dark text-decoration-none">Anonymous Board</h1></center>
      </Link>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Route exact path='/' component={App}/>
    <Switch>
      <Route path='/thread/:number' component={Thread}/>
    </Switch>
  </main>
)

ReactDOM.render((
    <Router>
      <Page/>
    </Router>
  ),
  document.getElementById('root')
)
