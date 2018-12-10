import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Catlist,CatInfo} from '../';
const Catroutes = ({dataLoaction}) =>{
    return(
            
                    <Switch>
                            <Route path='/category/cat/:number' component={Catlist}/>
                            <Route path='/category/info/:number' component={CatInfo}/>
                            <Route exact path={dataLoaction.match.path} render={() => <h3>Please select any category.</h3>} />
                    </Switch>
          
        );
}
export default Catroutes;
