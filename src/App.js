import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Tasks from './Components/TaskList/Tasks'
import TaskContent from './Components/TaskContent/TaskContent'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Ranking from './Components/Ranking/Ranking'
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

function App() {



  return (
    <div className="App">
      
      
      <Router>
        {/* <Navbar/>
        <Sidebar/>
        <Taskbar/> */}
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/tasklist" component={Tasks}>
          </Route>
          <Route path="/taskcontent" component={TaskContent}>
          </Route>
          <Route path="/login" component={Login}>
          </Route>
          <Route path="/signup" component={Signup}>
          </Route>
          <Route path="/ranking" component={Ranking}>
          </Route>
        </Switch>
      </Router>
      
      
          
    </div>
  );
}

export default App;
