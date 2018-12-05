import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
  GoToPrivate() {
    if(this.isAuthenticated)
        return <Redirect to={{pathname: "/profile"}} ></Redirect>;
  }
};

class Signin extends React.Component{
  state = {redirect: false};
  handelClick(e){
    fakeAuth.authenticate();
    this.setState({redirect:true});
  }
  render(){
          return(
            <div>
              <h4>Welcome to the SignIn Page!</h4>
              <Button onClick={this.handelClick.bind(this)}>SignIn</Button>
              {fakeAuth.GoToPrivate()}
            </div>
            )
          };

}  
export { Signin ,fakeAuth };
// export default fakeAuth;