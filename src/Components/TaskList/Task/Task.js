import React from 'react'
import {
    useHistory
} from "react-router-dom";
import './Task.css'


const Task = (props, {location}) => {
    const history = useHistory() 

    const click = () => {
        console.log(props.id)
        const obj = {
            content: props.content,
            name: props.name,
            answer: props.answer,
            cat: props.cat,
            points: props.points,
            _id: props._id,
            id: props.id
        }
        localStorage.setItem('MyData', JSON.stringify(obj));
        history.push(`/taskcontent?id=${props.id}`)

    } 

    return (
        <div className="tasks-sec" onClick={click}>
            <div className="tasks-sec_element-start">
                <div className="tasks-sec_element-start_content">
                    <div className="tasks-sec_element-start_content-rate">
                        7 kyu
                    </div>
                    <div className="tasks-sec_element-start_content-name">
                        {props.name}
                    </div>
                </div>
                {/* <img src={math} className="tasks-sec_icon"/> */}
                <div className="tasks-sec_element-start_content-propreties">
                    Like it: 19 - Percentage of solve: 94% of 61 - Autor: dinglemouse
                </div>
                <div className="tasks-sec_element-start_content-cat">
                    <span className="tasks-sec_element-start_content-cat_text">{props.cat}</span>
                </div>
            </div>
            <div className="tasks-sec_element-start_content-propreties" >
                Date: {props.date}
            </div>
        </div>
    )
}

export default Task

