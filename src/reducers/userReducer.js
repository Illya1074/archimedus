
const userReducer = (state = JSON.parse(localStorage.getItem('MyUser')) || {
    name: 'Unknown',
    points: 0,
    login: false,
    level: 1,
    id: ''
}, action) => {
    console.log(state)
    // console.log(JSON.parse(localStorage.getItem('MyUser')))

    switch(action.type){
        case 'SETNAME':
            // console.log(JSON.parse(localStorage.getItem('MyUser')))     
            state.name = action.name
            localStorage.setItem('MyUser', JSON.stringify(state)); 
            return state
        case 'SETPOINTS':
            // console.log(JSON.parse(localStorage.getItem('MyUser')))
            state.points = action.points + state.points
            localStorage.setItem('MyUser', JSON.stringify(state));
            return state
        case 'LOGIN':
            state.login = action.login
            localStorage.setItem('MyUser', JSON.stringify(state));
            return state
        case 'LEVEL':
            state.level = action.level
            localStorage.setItem('MyUser', JSON.stringify(state));
            return state
        case 'ID':
            state.id = action.id
            localStorage.setItem('MyUser', JSON.stringify(state));
            return state
        case 'STATE_INISIALIZE':
            state = action.state
            localStorage.setItem('MyUser', JSON.stringify(state));
            return state
        case 'DEFUALT_STATE':
            return {
                name: 'Unknown',
                points: 0,
                login: false,
                level: 1,
                id: ''
            }
        default:
            return state;
    }
}

export default userReducer;