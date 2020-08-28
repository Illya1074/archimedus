import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'


const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className="home">
                <h1 className="home_header">Kontakt</h1>
                
                <div className="home_flex">
                    <div className="home_content">
                        Email: ilya@sheremetov.com 
                    </div>
                    <div className="home_content">
                        Phone: +38 537 203 991 
                    </div>
                    <div className="home_content">
                        Facebook: Illia Sheremetov
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Contact
