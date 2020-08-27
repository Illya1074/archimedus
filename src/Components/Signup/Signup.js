import React, {useEffect, useState} from 'react'
import {
    useHistory
} from "react-router-dom";
import './Signup.css'
import Axios from 'axios'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const signup = () => {
        try{
            Axios({
              method: "POST",
              data: {
                username: username,
                password: password
              },
              withCredentials: true,
              url: "https://archimedus.herokuapp.com/register",
            }).then((res) => {    
              console.log('ok')
              console.log(res.data)
              click()
            }).catch((err) => {
              console.log(err)
            })
          } catch(err){
            console.log(err)
          }
    }
    

    const click = () => {
        history.push('/login')
    }

    return (
        <div className="login">
            <div className="login-margin-wraper">
                <div className='login-logo'></div>
            </div>
            <h3 className="login-header">Archimedus</h3>
            
            <div className='login-input-sec'>
                <input onChange={(e) => setUsername(e.target.value)} className="login-input-sec__input" placeholder='type your login'></input>
                <input onChange={(e) => setPassword(e.target.value)} className="login-input-sec__input" placeholder='type your password'></input>
            </div>

            <div onClick={signup} className="login__login-button">
                SIGNUP
            </div>

            <div className="login__forgot-password">Forgot Password?</div>
            <div onClick={click} className="login__signup">Login</div>
        </div>
    )
}

export default Signup

