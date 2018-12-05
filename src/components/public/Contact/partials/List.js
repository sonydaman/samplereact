import React from 'react';
// import ContactList from '../../../../ContactList';
import { Link } from 'react-router-dom';

// const List = (props) => {
// //   const location = ContactList.get(
// //     parseInt(props.match.params.number, 10)
// //   )
// //   if (!location) {
// //     return <div>Sorry, but the location was not found</div>
// //   }
//   const location = { name : "Developer" ,number : props.match.params.number, position : "Dubai" }; 
//   return (
//     <div>
//       <h1>{location.name} (#{location.number})</h1>
//       <h2>Location: {location.position}</h2>
//       <Link to='/details'>Back</Link>
//     </div>
//   )
// }


const List = (props) => {
    return( 
            <div>
                <h4>Welcome to the List Page!</h4>
                <Link to='/details'>Back</Link>
            </div>
        )
    }
export default List;