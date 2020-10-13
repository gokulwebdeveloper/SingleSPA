const UserAction = (dispatch) => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => dispatch({type:"UPDATE_USER",payload:res.data}));
}

export default UserAction;