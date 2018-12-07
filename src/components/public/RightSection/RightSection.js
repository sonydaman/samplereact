import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Slider,Cardlist,Catlist} from '../';
const rightSide = () =>(
        <div>
            <Slider />
            <Cardlist />
        </div>
)
const RightSection = () =>{
    return(
        <div className="col-lg-9">
            {/* {rightSide()} */}
            <Switch>
                <Route exact path={`/`} component={rightSide}/>
                <Route path='/cat/1' component={Catlist}/>
                {/* <Route exact path={match.path} render={() => <h3>Please select a Link.</h3>} /> */}
            </Switch>
        </div>
    )
}

export default RightSection;