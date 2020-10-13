import React from 'react';
import './App.css';
import UserAction from './store/Actions/userActions';
import {connect} from 'react-redux';

function Appnew(props) {
   return (
    <div className="App">
       <h1>List of Users</h1>

       <p>
         Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
       </p>
      
       <button onClick={props.getUser}> Display List of Users</button><br ></br>
        <table width="100%" cellspacing="0" cellpadding="0">
          <tr>
          <th>ID</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Email Address</th>
           </tr>
         {props.user.length ===0 ? 
            <tr>
             <td colspan="4"> No Users Available </td>
            </tr>: 
          props.user.map(users => 
            <tr>
                <td>{users.id}</td>
                 <td>{users.first_name}</td>
                 <td>{users.last_name}</td>
                 <td>{users.email}</td>
            </tr>
         )

         }

         </table>
    </div>
  );
}

const mapStateToProps = (state)=> {
   return state;
}

const mapDispatcheToProps = (dispatch)=> {
  return{
    getUser:()=>{dispatch(UserAction)}
  }

}


export default connect(mapStateToProps,mapDispatcheToProps)(Appnew);
