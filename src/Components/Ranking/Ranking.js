import React, {useState, useEffect} from 'react'
import './Ranking.css'
import RankingElement from './RankingElement/RankingElement'
import Axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Taskbar from '../../Components/Taskbar/Taskbar'
import {useDispatch, useSelector} from 'react-redux'

const Ranking = () => {
    
    const [arr, setArr] = useState([])
    const abortController = new AbortController()
    
    const endpoint = useSelector(state => state.endPoint)
    useEffect(() => {    
        
        try{
            Axios({
              method: "POST",
              data: {
                  cat: 'User'
              },
              withCredentials: true,
              url: endpoint+"/getuser",
            }).then((res) => {    
              // console.log('ok')
              console.log(res.data)
              setArr(res.data.sort(compare).reverse())
              console.log(res.data.sort(compare))
            }).catch((err) => {
              console.log(err)
            })
          } catch(err){
            console.log(err)
          }
        
        return abortController.abort()
        
    }, [0]);

    const compare = (a, b) => {
        const A = a.points
        const B = b.points
        
        let comparison = 0;
        if (A > B) {
            comparison = 1;
        } else if (A < B) {
            comparison = -1;
        }
        return comparison;
    }

    return (
        <>
            <Navbar/>
            <Sidebar/>
            <div className="ranking">
                <div className='space'></div>
                {
                    arr.map((item, i) => 
                        <RankingElement key={i} position={i+1}  username={item.username} points={item.points} />
                    )
                }
            </div>
        </>
        
    )
}

export default Ranking
