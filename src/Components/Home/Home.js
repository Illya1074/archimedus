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
            <div className="home">
                {/* <h1 className="home_header">Archimedus</h1> */}
                <div className="home content">

                </div>

            </div>
        </div>
    )
}

export default Home
