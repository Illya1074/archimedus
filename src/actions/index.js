
export const setName = (name) => {
    return {
        type: 'SETNAME',
        name
    }
}

export const setPoints = (points) => {
    return {
        type: 'SETPOINTS',
        points
    }
}

export const setLogin = (login) => {
    return {
        type: 'LOGIN',
        login
    }
}


export const setLevel = (lvl) => {
    return {
        type: 'LEVEL',
        level: lvl
    }
}


export const setId = (id) => {
    return {
        type: 'ID',
        id: id
    }
}

export const defualtState = () => {
    return {
        type: 'DEFUALT_STATE'
    }
}

export const stateInisialize = (state) => {
    return {
        type: 'STATE_INISIALIZE',
        state: state
    }
}


