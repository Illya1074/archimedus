import React, {useEffect, useState} from 'react'
import Task from './Task/Task'
import Axios from 'axios'
import queryString from 'query-string';
import './Tasks.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Taskbar from '../../Components/Taskbar/Taskbar'

const Tasks = ({location}) => {

    const abortController = new AbortController()
    const [state, setState] = useState([{name: '', cat:'', date: ''}])
    const ENDPOINT = 'https://archimedus.herokuapp.com/';

    useEffect(() => {    
        const obj = queryString.parse(location.search);
        // console.log(cat.cat)
        if(obj.cat !== undefined){
          console.log('yes')
          try{
            Axios({
              method: "POST",
              data: {
                  cat: obj.cat
              },
              withCredentials: true,
              url: "https://archimedus.herokuapp.com/findCat",
            }).then((res) => {    
              // console.log('ok')
              console.log(res.data)
              setState(res.data)
            }).catch((err) => {
              console.log(err)
            })
          } catch(err){
            console.log(err)
          }
        } else if(obj.val !== undefined) {
          console.log(obj.val)
          try{
            Axios({
              method: "POST",
              data: {
                  name: obj.val
              },
              withCredentials: true,
              url: "https://archimedus.herokuapp.com/findProblem",
            }).then((res) => {    
              // console.log('ok')
              console.log(res.data)
              setState(res.data)
            }).catch((err) => {
              console.log(err)
            })
          } catch(err){
            console.log(err)
          }
        } else if(obj.lvl !== undefined) {
          try{
            Axios({
              method: "POST",
              data: {
                  lvl: obj.lvl
              },
              withCredentials: true,
              url: "https://archimedus.herokuapp.com/findLvl",
            }).then((res) => {    
              // console.log('ok')
              console.log(res.data)
              setState(res.data)
            }).catch((err) => {
              console.log(err)
            })
          } catch(err){
            console.log(err)
          }
        }
        
        
        return abortController.abort()
        
    },  [ENDPOINT, location.search]);

    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Taskbar/>
            <div className="tasks">
                {
                    state.map((item, i) => 
                        <Task name={item.name} id={item.id} points={item.points} key={i} cat={item.cat} date={'02.05.2020'} _id={item._id} content={item.content} answer={item.answer}/>
                    )
                }
            </div>
          
        </div>
    )
}

export default Tasks
