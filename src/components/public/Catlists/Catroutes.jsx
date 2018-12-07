import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Catlist} from '../';
const Catroutes = ({match}) =>{
    return(
            
                    <Switch>
                            <Route path='/category/cat/:number' component={Catlist}/>
                            {/* <Route exact path={match.path} render={() => <h3>Please select a Link.</h3>} /> */}
                    </Switch>
          
        );
}
export default Catroutes;
