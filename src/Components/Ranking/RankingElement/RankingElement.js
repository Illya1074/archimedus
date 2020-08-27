import React from 'react'
import './RankingElement.css'


const RankingElement = (props) => {

    
    return (
        <div  className="ranking-element">
            <div className="ranking-element__flex">
                <div className="ranking-element__position">
                    #{props.position}
                </div>
                <div className="ranking-element_avatar">

                </div>
                <div className="ranking-element_lvl">
                    1 lvl
                </div>
                <div className="ranking-element_name">
                    {props.username }
                </div>
                <div className="ranking-element__honor">
                    {props.points}
                 </div>
            </div>
            
        </div>
    )
}

export default RankingElement
