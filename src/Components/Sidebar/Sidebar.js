import React, {useState} from 'react'
import Math from './icons/MathIcon'
import Question from './icons/QuestionIcon'
import Forum from './icons/ForumIcon'
import Contact from './icons/ContactIcon'
import Cup from './icons/Cup'
import './Sidebar.css'
import {useHistory} from 'react-router-dom'


const Sidebar = () => {

    const history = useHistory()
    const [sidebar, setSidebar] = useState(false)

    const toRanking = () => {
        history.push('/ranking')
    }

    const click = (val) => {
        setSidebar(!sidebar)
        history.push('/'+val)
    }

    

    return (
        <div>
            <div onClick={() => setSidebar(!sidebar)} className='burger'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            <div className={sidebar ? "side-bar active" : "side-bar"}>
                {sidebar ? <div onClick={() => setSidebar(!sidebar)} className='exit'>
                    <div className="cross-one"></div>
                    <div className="cross-two"></div>
                </div> : <></> }
                
                <div className="side-bar__menu">
                    <ul className="side-bar__menu-list">
                    
                    <div className="side-bar__menu_logo"></div>
                    <Math className="icon math" width={27} height={27} fill={'#C0C0C0'} position={'fixed'} top={'0'} left={'0'}/>
                    <Contact className="icon contact" width={27} height={27} fill={'#C0C0C0'} position={'fixed'} top={'0'} left={'0'}/>
                    <Question className="icon question" width={27} height={27} fill={'#C0C0C0'}/>
                    <Cup className="icon cup" width={27} height={27} fill={'#C0C0C0'}/>
                    <li onClick={() => click('archimedus')} className="side-bar__menu-list_content">Home</li>
                    <li onClick={() => click('kata')} className="side-bar__menu-list_content">Kata</li>
                    <li onClick={() => click('aboutus')} className="side-bar__menu-list_content">About&nbsp;us</li>
                    <li onClick={() => click('login')} className="side-bar__menu-list_content">Login</li>
                    <li onClick={() => {
                        setSidebar(!sidebar)
                        toRanking()
                    }} className="side-bar__menu-list_content">Leaders</li>
                    </ul>
                </div>
                
                {/* <div onClick={toRanking} className="side-bar__menu-list_content leaders">Leaders</div> */}
                {/* <Cup className="icon cup" width={27} height={27} fill={'#C0C0C0'}/> */}
            </div>
        </div>
    )
}

export default Sidebar
