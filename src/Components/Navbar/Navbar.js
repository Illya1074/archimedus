import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {useSelector} from 'react-redux'

const Navbar = ({ location }) => {
    const user = useSelector(state => state.user)
    const ENDPOINT = 'http://localhost:5000';
    const [state, setState] = useState(user)  
    const abortController = new AbortController()

    // useEffect(() => {

    //   setState(user)
      
    //   return abortController.abort()
    // }, [ENDPOINT, location.search]);

    return (
        <div>
            <div className="navbar">
                <div className="navbar-list">
                    <div className="navbar-list_avatar"></div>
                    <div className="navbar-list_name"><span>{state.name}</span></div>
                    <div className="navbar-list_kyu">{state.level} lvl</div>
                    <div className="navbar-list_rate">{state.points} points</div>
                
                </div>
            </div>
        </div>
    )
}

export default Navbar
