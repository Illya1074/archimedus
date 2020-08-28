
// https://archimedus.herokuapp.com
const endPoint = (state = 'http://localhost:5000', action) => {
    switch(action.type){
        case 'SETENDPOINT':
            state = action.val
            return state
        default:
            return state;
    }
}

export default endPoint;