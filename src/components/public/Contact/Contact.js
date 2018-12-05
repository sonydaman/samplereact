
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Details, List  } from './partials/';
// The Roster component matches one of two different routes
// depending on the full pathname
const Contact = ({ match }) => (
  <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`/contact/details`}>Details</Link>
        </li>
        <li>
          <Link to={`/contact/list/12`}>List</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`/contact/details`} component={Details}/>
        <Route path='/contact/list/:number' component={List}/>
        <Route exact path={match.path} render={() => <h3>Please select a Link.</h3>} />
      </Switch>
      {/* <Route path={`${match.path}/details`} component={Details} />
      <Route path={`${match.url}/list/:number`} component={List}/>
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      /> */}
        
    </div>

)


export default Contact;
