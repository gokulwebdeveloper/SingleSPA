const PersonReducer = (state={},{type,payload}) => { 
    if(type === "UPDATENAME"){
      return {name:payload};
    }
   return state
 
 };

 export default PersonReducer;