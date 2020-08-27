

const userReducer = (state = JSON.parse(localStorage.getItem('MyUser')) || {
    name: 'Unknown',
    points: 0,
    login: false,
    level: 1,
    id: '',
    endpoint: 'https://archimedus.herokuapp.com'
}, action) => {
    switch(action.type){
        case 'SETNAME':
            state.name = action.name
            localStorage.setItem('MyUser', JSON.stringify(state)); 
            return state
        case 'SETPOINTS':
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
        default:
            return state;
    }
}

export default userReducer;