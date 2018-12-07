import React from 'react';
const Catlist = (props) =>{
        console.log( props.match.params.number);
        return(
                <div>
                        Cat - {props.match.params.number}
                </div>
                );
}
export default Catlist;