import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Thread from './thread'
import Notfound from './notfound'

const Page = () => (
  <div>
    <Header />
    <Main />
  </div>
)

const Header = () => (
  <header>
    <nav>
      <Link to='/'><center><h1 className="text-dark">Anonymous Board</h1></center></Link>
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
    <Page />
  </Router>
  ),
  document.getElementById('root')
)
