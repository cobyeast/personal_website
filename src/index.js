import React, { StrictMode, Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/navbar.component'
import Footer from './components/footer.component'
import Blog from './Blog'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Projects from './projects/Projects'

const NoMatchPage = () => {
  return (
    <Fragment>
      <div className="Standout">Error</div>
      <div className='NotFound'>
      <h3>404 - Not found</h3>
      <p>Sorry this page does not exist yet.</p>
      <a href='/'>Return Home</a>
      </div>
    </Fragment>
  )
}

ReactDOM.render(
  <StrictMode>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blog' component={Blog} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
    <Footer />
  </StrictMode>,
  document.getElementById('root')
);