import React from 'react';

const handelClick = (e)=>{
  console.log("Click",e);
}
const Signin = ()=> (
  <div>
    <h1>Welcome to the SignIn Page!</h1>
    <div>
      <button onClick={handelClick}>
        SignIn
      </button>
    </div>
  </div>
  );
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  
export { Signin ,fakeAuth };
// export default fakeAuth;