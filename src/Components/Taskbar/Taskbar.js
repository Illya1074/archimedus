import React from 'react'
import {
    useHistory
} from "react-router-dom";
import './Taskbar.css'


const Taskbar = () => {

    const history = useHistory()
    const ref = React.createRef();

    const click = (cat) => {
        history.push(`/tasklist?cat=${cat}`)
        
    }

    const lvlClick = (lvl) => {
        history.push(`/tasklist?lvl=${lvl}`)
        
    }

    const search = (e) => {
        if(e.keyCode == 13){
            // console.log(e.target.value)
            
            history.push(`/tasklist?val=${e.target.value}#test`)
            ref.current.click()
        }
    }

    

    return (
        <div>
            <div className="task-bar">
                <div className="task-bar__list">
                    <a ref={ref} href="#test"></a>
                    <input  placeholder="search" onKeyDown={search} className="task-bar__list-input"></input>
                    <div className="task-bar_line"></div>
                </div>
                {/* <div className="task-bar__list-filters">
                    <div className="task-bar__list-filters_element">
                    <div className="task-bar__list-filters_element-content">Sort by:</div>
                    <div className="task-bar__list-filters_element-content">Newest</div>
                    </div>
                    <div className="task-bar__list-filters_element">
                    <div className="task-bar__list-filters_element-content">Language:</div>
                    <div className="task-bar__list-filters_element-content">My Languages</div>
                    </div>
                    <div className="task-bar__list-filters_element">
                    <div className="task-bar__list-filters_element-content">Status:</div>
                    <div className="task-bar__list-filters_element-content">Approved</div>
                    </div>
                    <div className="task-bar__list-filters_element">
                    <div className="task-bar__list-filters_element-content">Progress:</div>
                    <div className="task-bar__list-filters_element-content">All</div>
                    </div>
                    
                </div> */}
                {/* <div className="task-bar_line"></div> */}
                <div className="task-bar__list-difficulty">
                    <div className="task-bar__list-difficulty_row">
                    <div onClick={() => lvlClick(8)} className="task-bar__list-difficulty_row-1-element">
                        <a href="#test">8&nbsp;lvl</a>
                    </div>
                    <div onClick={() => lvlClick(7)} className="task-bar__list-difficulty_row-1-element">
                        <a href="#test">7&nbsp;lvl</a>
                    </div>
                    <div onClick={() => lvlClick(6)} className="task-bar__list-difficulty_row-1-element">
                        <a href="#test">6&nbsp;lvl</a>
                    </div>
                    <div onClick={() => lvlClick(5)} className="task-bar__list-difficulty_row-1-element">
                        <a href="#test">5&nbsp;lvl</a>
                    </div>
                    </div>
                    <div className="task-bar__list-difficulty_row">
                    <div onClick={() => lvlClick(4)} className="task-bar__list-difficulty_row-1-element">
                        <a href="#test">4&nbsp;lvl</a>
                    </div>
                    <div onClick={() => lvlClick(3)} className="task-bar__list-difficulty_row-1-element">
                        <a href="#test">3&nbsp;lvl</a>
                    </div>
                    <div onClick={() => lvlClick(2)} className="task-bar__list-difficulty_row-1-element">
                        <a href="#test">2&nbsp;lvl</a>
                    </div>
                    <a href="#test"><div href="#test" onClick={() => lvlClick(1)} className="task-bar__list-difficulty_row-1-element">
                        1&nbsp;lvl
                    </div>
                    </a>
                    </div>
                    
                </div>
            <div className="task-bar_line"></div>
                <div className="task-bar__list-cat">
                    <div className="task-bar__list-cat_list">
                    <div  className="task-bar__list-cat_list-element">Tags:</div>
                    <div onClick={() => click("NumbersCat")} className="task-bar__list-cat_list-element"><a href="#test">Podstawowe działania na liczbach</a></div>
                    <div onClick={() => click("Logarytmy")} className="task-bar__list-cat_list-element"><a href="#test">Logarytmy</a></div>
                    <div onClick={() => click("Equations")} className="task-bar__list-cat_list-element"><a href="#test">Równania</a></div>
                    <div onClick={() => click("Inequalities")} className="task-bar__list-cat_list-element"><a href="#test">Nierówności</a></div>
                    <div onClick={() => click("LinearFunction")} className="task-bar__list-cat_list-element"><a href="#test">Funkcja Liniowa</a></div>
                    <div onClick={() => click("QuadraticFunction")} className="task-bar__list-cat_list-element"><a href="#test">Funkcja Kwadratowa</a></div>
                    <div onClick={() => click("MeasurableFunction")} className="task-bar__list-cat_list-element"><a href="#test">Funkcja Wymierne</a></div>
                    <div onClick={() => click("Functions")} className="task-bar__list-cat_list-element"><a href="#test">Funkcje</a></div>
                    <div onClick={() => click("Strings")} className="task-bar__list-cat_list-element"><a href="#test">Ciągi</a></div>
                    <div onClick={() => click("Trigonometry")} className="task-bar__list-cat_list-element"><a href="#test">Trygonometria</a></div>
                    <div onClick={() => click("PlanarGeometry")} className="task-bar__list-cat_list-element"><a href="#test">Geometria płaska</a></div>
                    <div onClick={() => click("AnalyticalGeometry")} className="task-bar__list-cat_list-element"><a href="#test">Geometria analityczna</a></div>
                    <div onClick={() => click("SpatialGeometry")} className="task-bar__list-cat_list-element"><a href="#test">Geometria przestrzenna</a></div>
                    <div onClick={() => click("CombinatoricsAndProbability")} className="task-bar__list-cat_list-element"><a href="#test">Kombinatoryka i prawdopodobieństwo</a></div>
                    <div onClick={() => click("Statistics")} className="task-bar__list-cat_list-element"><a href="#test">Statystyka</a></div>
                    <div onClick={() => click("RealNumbers")} className="task-bar__list-cat_list-element"><a href="#test">Liczby Rzeczywiste</a></div>
                    </div>
                </div>

            </div>
                       
        </div>
    )
}

export default Taskbar
