
import './App.css';
import Task from './Components/Task';
import AddGoal from './Components/AddGoal';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NoGoal from './Components/NoGoal';
import Add from './Components/Add';
import Nav from './Components/nav';
function App() {
  return (
    // added the router
    <Router>
    <div className="App">
    <Nav/>
    <Add/>
    <Routes>
    <Route path="/" element={<Task />}></Route>
    <Route path="/add" element={<AddGoal />}></Route>
    <Route path="/noGoal" element={<NoGoal/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;


//-----------------------------------------------------------------------------
// const ashish = {title:"student",age:25,talk(){console.log(this)}};
// const wait = ashish.talk;
// // this will print undefined as binding of object cannot done in this way
// wait();

// const wait = ashish.talk.bind(ashish);
// wait();
//-----------------------------------------------------------------------------