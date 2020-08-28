import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            {/* <Taskbar/> */}
            <div className="home">
                <h1 className="home_header">Co to jest Archimedus???</h1>
                <div className="home_flex">
                    
                    <div className="home_content_start">
                        Każdy pewnie chce mieć dobre oceny z matematyki. Matematyka to przedewszystkim praktyka i robienie zadań. 
                        Dana strona udostępni wam wystarczojąco dużo dobrych zadań żeby oponować dany przedmiot. 
                    </div>
                    
                </div>
                <div className="home_flex">
                    <div className="home_content">
                        Często tak bywa że zadania są za trudne i trzeba zrobić krok do tyłu, albo naodwrót zadania są za łatwe i potrzebne są
                        trudniejsze zadania. Archimedus udostępnia 8 poziomów trudności. Poziom od 1 podstawówki do ostatniej klasy liceum. 
                    </div>
                        <div className='home-pic lvl'></div>
                </div>
                <div className="home_flex">
                    
                    <div className="home_content">
                        Jest duzo działow które trzeba opanować, nie można ograniczać się tylko jednym tematem więc, 
                        mamy wygodnie filtry do poszukiwania odpowiednich zadań. 
                    </div>
                        <div className='home-pic cate'></div>
                </div>
                <div className="home_flex">
                    <div className="home_content">
                        Nic tak nie napędza ludzi do robienia czegoś jak konkurencja temu na naszej stronie również możesz 
                        rywalizować z innymi użytkownikami i porównywać swoje umięjętności
                    </div>
                        <div className='home-pic rank'></div>
                </div>

            </div>
        </div>
    )
}

export default Home
