import React from 'react';
// import { Switch, Route  } from 'react-router-dom';
import {LeftSection,Slider,Cardlist}  from "../";


const Home = () =>(
  <div className="container">
    <div className="row">
      <LeftSection />
      <div className="col-lg-9">
          <Slider />
          <Cardlist />
        </div>
    </div>
  </div>
)

export default Home;