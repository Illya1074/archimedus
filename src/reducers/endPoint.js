

const endPoint = (state = 'https://archimedus.herokuapp.com', action) => {
    switch(action.type){
        case 'SETENDPOINT':
            state = action.val
            return state
        default:
            return state;
    }
}

export default endPoint;