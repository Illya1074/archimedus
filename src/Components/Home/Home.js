import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Taskbar from '../../Components/Taskbar/Taskbar'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Taskbar/>
        </div>
    )
}

export default Home
