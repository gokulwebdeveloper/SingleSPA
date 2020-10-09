import React from 'react';
import './App.css';
import PersonAction from './store/Actions/personActions';
import GameAction from './store/Actions/gameAction';
import UserAction from './store/Actions/userActions';
import {connect} from 'react-redux';

function Appnew(props) {
   return (
    <div className="App">
       <h1>Redux Tutorial</h1>
       {props.person.name} <button onClick={props.changeName}>Update Name</button><br/>
       {props.game.name} <button onClick={props.changeGame}> Update Name</button> <br />
       <button onClick={props.getUser}> Update Name</button><br ></br>
         {props.user.length ===0 ? "No user available" : props.user.map(users => <p>{users.email}</p>)}
    </div>
  );
}

const mapStateToProps = (state)=> {
   return state;
}

const mapDispatcheToProps = (dispatch)=> {
  return{
    changeName : () => { dispatch(PersonAction)},
    changeGame: () => { dispatch(GameAction)},
    getUser:()=>{dispatch(UserAction)}
  }

}


export default connect(mapStateToProps,mapDispatcheToProps)(Appnew);
