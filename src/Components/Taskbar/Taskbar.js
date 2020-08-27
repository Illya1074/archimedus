import React from 'react'
import {
    useHistory
} from "react-router-dom";
import './Taskbar.css'


const Taskbar = () => {

    const history = useHistory()
    
    const click = (cat) => {
        history.push(`/tasklist?cat=${cat}`)
        
    }

    const lvlClick = (lvl) => {
        history.push(`/tasklist?lvl=${lvl}`)
        
    }

    const search = (e) => {
        if(e.keyCode == 13){
            console.log(e.target.value)
            history.push(`/tasklist?val=${e.target.value}`)
        }
    }



    return (
        <div>
            <div className="task-bar">
                <div className="task-bar__list">
                    <input placeholder="search" onKeyDown={search} className="task-bar__list-input"></input>
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
                        8&nbsp;lvl
                    </div>
                    <div onClick={() => lvlClick(7)} className="task-bar__list-difficulty_row-1-element">
                        7&nbsp;lvl
                    </div>
                    <div onClick={() => lvlClick(6)} className="task-bar__list-difficulty_row-1-element">
                        6&nbsp;lvl
                    </div>
                    <div onClick={() => lvlClick(5)} className="task-bar__list-difficulty_row-1-element">
                        5&nbsp;lvl
                    </div>
                    </div>
                    <div className="task-bar__list-difficulty_row">
                    <div onClick={() => lvlClick(4)} className="task-bar__list-difficulty_row-1-element">
                        4&nbsp;lvl
                    </div>
                    <div onClick={() => lvlClick(3)} className="task-bar__list-difficulty_row-1-element">
                        3&nbsp;lvl
                    </div>
                    <div onClick={() => lvlClick(2)} className="task-bar__list-difficulty_row-1-element">
                        2&nbsp;lvl
                    </div>
                    <div onClick={() => lvlClick(1)} className="task-bar__list-difficulty_row-1-element">
                        1&nbsp;lvl
                    </div>
                    </div>
                    
                </div>
            <div className="task-bar_line"></div>
                <div className="task-bar__list-cat">
                    <div className="task-bar__list-cat_list">
                    <div  className="task-bar__list-cat_list-element">Tags:</div>
                    <div onClick={() => click("NumbersCat")} className="task-bar__list-cat_list-element">Podstawowe działania na liczbach</div>
                    <div onClick={() => click("Logarytmy")} className="task-bar__list-cat_list-element">Logarytmy</div>
                    <div onClick={() => click("Equations")} className="task-bar__list-cat_list-element">Równania</div>
                    <div onClick={() => click("Inequalities")} className="task-bar__list-cat_list-element">Nierówności</div>
                    <div onClick={() => click("LinearFunction")} className="task-bar__list-cat_list-element">Funkcja Liniowa</div>
                    <div onClick={() => click("QuadraticFunction")} className="task-bar__list-cat_list-element">Funkcja Kwadratowa</div>
                    <div onClick={() => click("MeasurableFunction")} className="task-bar__list-cat_list-element">Funkcja Wymierne</div>
                    <div onClick={() => click("Functions")} className="task-bar__list-cat_list-element">Funkcje</div>
                    <div onClick={() => click("Strings")} className="task-bar__list-cat_list-element">Ciągi</div>
                    <div onClick={() => click("Trigonometry")} className="task-bar__list-cat_list-element">Trygonometria</div>
                    <div onClick={() => click("PlanarGeometry")} className="task-bar__list-cat_list-element">Geometria płaska</div>
                    <div onClick={() => click("AnalyticalGeometry")} className="task-bar__list-cat_list-element">Geometria analityczna</div>
                    <div onClick={() => click("SpatialGeometry")} className="task-bar__list-cat_list-element">Geometria przestrzenna</div>
                    <div onClick={() => click("CombinatoricsAndProbability")} className="task-bar__list-cat_list-element">Kombinatoryka i prawdopodobieństwo</div>
                    <div onClick={() => click("Statistics")} className="task-bar__list-cat_list-element">Statystyka</div>
                    <div onClick={() => click("RealNumbers")} className="task-bar__list-cat_list-element">Liczby Rzeczywiste</div>
                    </div>
                </div>

            </div>            
        </div>
    )
}

export default Taskbar
