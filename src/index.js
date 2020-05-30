import React, { StrictMode, Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Blog from './blog/Blog'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Resume from './components/Resume'
import Project from './page/Project'

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
        <Route exact path='/projects' component={Project} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/blog' component={Blog} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
    <Footer />
  </StrictMode>,
  document.getElementById('root')
);