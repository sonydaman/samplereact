import React from 'react';
import {Cardlist} from '../';
const Catlist = (props) =>{
        // console.log( props.match.params.number);
        return(
                <div>
                        Cat - {props.match.params.number}
                        <Cardlist catlist={props.match.params.number} />
                </div>
                );
}
export default Catlist;