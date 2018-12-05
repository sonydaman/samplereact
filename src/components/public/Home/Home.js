import React from 'react';
// import { Link } from 'react-router-dom';
import {LeftSection,RightSection}  from "../";
// const checkLogin = () =>
//   fakeAuth.isAuthenticated
//       ? fakeAuth.GoToPrivate()
//       : <Link to='/SignIn'>Sign</Link>
// const Home = () => (
//   <div>
//     <h4>Welcome to the Website!</h4>
//     {checkLogin()}
//   </div>
// )

const Home = () =>(
  <div className="container">
    <div className="row">
      <LeftSection />
      <RightSection />
    </div>
  </div>
)

export default Home;