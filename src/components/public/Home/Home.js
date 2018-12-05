import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (
  <div>
    <h1>Welcome to the Website!</h1>
    <Link to='/SignIn'>Sign</Link>
  </div>
)

export default Home;