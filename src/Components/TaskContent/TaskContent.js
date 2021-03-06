import React, {useEffect, useState} from 'react'
import {
    useHistory
} from "react-router-dom";
import './TaskContent.css'
import Axios from 'axios'
import {useDispatch} from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Taskbar from '../../Components/Taskbar/Taskbar'
import {setPoints} from '../../actions/index.js'
import {useSelector} from 'react-redux'

const TaskContent = () => {
    const retrievedObj = localStorage.getItem('MyData')
    const dispatch = useDispatch();
    const [mark, setMark] = useState('')
    const user = useSelector(state => state.user)
    const endpoint = useSelector(state => state.endPoint)

    const click = (e) => {
      // console.log(endpoint)
     

        if(e.keyCode == 13){
            // put the login here
            console.log(JSON.parse(retrievedObj).id)
            // console.log(user.id)
            if(e.target.value == JSON.parse(retrievedObj).answer){
                setMark('Good')
                // console.log(JSON.parse(retrievedObj).points)
                try{
                  Axios({
                    method: "POST",
                    data: {
                      id:JSON.parse(retrievedObj).id,
                      _id: user.id
                    },
                    withCredentials: true,
                    url: endpoint+"/checkProblemExisting",
                  }).then((res) => {    
                    // console.log('ok')
                    console.log(res.data)
                    if(res.data !== 'exist'){
                      dispatch(setPoints(JSON.parse(retrievedObj).points))
                      try{
                        Axios({
                          method: "POST",
                          data: {
                            id: JSON.parse(retrievedObj).id,
                            _id: user.id
                          },
                          withCredentials: true,
                          url: endpoint+"/addproblemtouser",
                        }).then((res) => {    
                          
                          // console.log(res.data)
                          
                          
                        }).catch((err) => {
                          // console.log(err)
                        })
                      } catch(err){
                        console.log(err)
                      }
                      // window.location.reload(false);
                      
                      try{
                          Axios({
                            method: "POST",
                            data: {
                              points:JSON.parse(retrievedObj).points
                            },
                            withCredentials: true,
                            url: endpoint+"/addpoints",
                          }).then((res) => {    
                            // console.log('ok')
                            // console.log(res.data)
                            window.location.reload(false);
                            
                          }).catch((err) => {
                            // console.log(err)
                          })
                        } catch(err){
                          console.log(err)
                        }
                        window.location.reload(false);
                    }  
                    
                  }).catch((err) => {
                    // console.log(err)
                  })
                } catch(err){
                  console.log(err)
                }

            } else {
                setMark('Bad')
            }
        }
    }

    return (
      <>
        <Navbar />
        <Sidebar/>
        <Taskbar/>
        <div className="task-content">
            <div className="task-content_flex">
                <div className="task-content__header">{JSON.parse(retrievedObj).name}</div>
                <div className="task-content__cat">{JSON.parse(retrievedObj).cat}</div>
            </div>
            <div className="task-content__main-content">
                {JSON.parse(retrievedObj).content}
            </div>
            <div className="task-content_flex">
                <div className="task-content__input">
                    <input placeholder="Your Answer" className="task-bar__list-input" onKeyDown={click}> 
                    </input>
                </div>
                <h5 className="task-content__mark">
                    {mark}
                </h5>
            </div>
            
          </div>
      </>
            
        
    )
}

export default TaskContent

