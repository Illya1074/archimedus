import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {useSelector} from 'react-redux'
import {
    useHistory
} from "react-router-dom";

const Navbar = () => {
    const user = useSelector(state => state.user)
    // const ENDPOINT = 'http://localhost:5000';
    const [state, setState] = useState(user)  
    const abortController = new AbortController()
    const history = useHistory()

    const click = () => {
        history.push('/login')
    }

    useEffect(() => {
        setState(user)
        return abortController.abort()
    }, [useSelector(state => state.user) , state]);

    return (
        <div>
            <div className="navbar">
                {user.login ? <div className="navbar-list">
                    <div className="navbar-list_avatar"></div>
                    <div className="navbar-list_name"><span>{state.name}</span></div>
                    <div className="navbar-list_kyu">{state.level} lvl</div>
                    <div className="navbar-list_rate">{state.points} points</div>
                </div> : 
                <div  className="navbar-list">
                    <div></div>
                    <div onClick={click} className="navbar-list_rate">Login</div>
                </div>}
                
            </div>
        </div>
    )
}

export default Navbar
