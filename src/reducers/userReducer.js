const userReducer = (state = {
    name: 'Unknown',
    points: 0,
    login: false,
    level: 1,
    id: ''
}, action) => {
    switch(action.type){
        case 'SETNAME':
            state.name = action.name 
            return state
        case 'SETPOINTS':
            state.points = action.points + state.points
            return state
        case 'LOGIN':
            state.login = action.login
            return state
        case 'LEVEL':
            state.level = action.level
            return state
        case 'ID':
            state.id = action.id
            return state
        default:
            return state;
    }
}

export default userReducer;