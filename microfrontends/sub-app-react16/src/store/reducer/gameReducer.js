const GameReducer = (state={},{type,payload}) => { 
    if(type === "UPDATE_GAME"){
        return {name:payload};
      }
    return state;
 };

 export default GameReducer;