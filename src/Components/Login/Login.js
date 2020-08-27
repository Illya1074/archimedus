import React, {useEffect, useState} from 'react'
import {
    useHistory
} from "react-router-dom";
import './Login.css'
import Axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {setName,setPoints,setLogin,setLevel, setId} from '../../actions/index.js'

const Login = () => {
    
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch();
    const endpoint = useSelector(state => state.endPoint)


    const login = () => {
      localStorage.removeItem("MyUser");  
      try{
            Axios({
              method: "POST",
              data: {
                username: username,
                password: password
              },
              withCredentials: true,
              url: endpoint+"/login",
            }).then((res) => {    
              console.log('ok')
              console.log(res.data)
              dispatch(setName(res.data.username))
              dispatch(setPoints(res.data.points))
              dispatch(setLogin(true))
              dispatch(setLevel(res.data.lvl))
              dispatch(setId(res.data._id))
              
              history.push('/archimedus')
            }).catch((err) => {
              console.log(err)
            })
          } catch(err){
            console.log(err)
          }
    }

    const click = () => {
        history.push('/signup')
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

            <div onClick={login} className="login__login-button">
                LOGIN
            </div>

            <div className="login__forgot-password">Forgot Password?</div>
            <div onClick={click} className="login__signup">Sign Up</div>
        </div>
    )
}

export default Login

