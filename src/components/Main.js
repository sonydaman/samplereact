import React from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'
import {Home , About , Blog ,Contact,Signin ,fakeAuth } from './public/';
import {Profile } from './private'; 
const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/SignIn' component={Signin}/>
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </main>
  )
  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/SignIn",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  export default Main;