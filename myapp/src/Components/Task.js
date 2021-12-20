
// Task js is responsible for fetching data from the json server which consists all tasks and then mapping it to the goal component
// also contains (deletion of task function)




import React, { useState,useEffect } from 'react';
import Goal from './Goal';
import '../App.css';
import Add from './Add';
import { useNavigate } from 'react-router-dom';


const Task =()=> {
    const [goal,setGoal] = useState(null);
    const[isPending,setIsPending] = useState(true);
    const navigate = useNavigate();


    // this function is for deletion of task using fetch json server with method delete
const statusHandler=(id)=>{
    

        fetch('http://localhost:8000/data/'+id,{
            method:'DELETE',
        }).then(()=>{
            window.location.reload();
        }).catch((err)=>{console.log(err.message)})
    
   
}

    useEffect(()=>{

        
// just tried to delay the fetching of data by 1 sec i know its not good but just a try to use settimeout function
setTimeout(() => {
   
fetch('http://localhost:8000/data').then((res)=>{ return res.json()}).then((data)=>{
    setGoal(data);
    if(data.length===0){
        navigate('/noGoal')
    }
    setIsPending(false);
}).catch((err)=>{
 console.log(err.message)
})

}, 1000);

},[])

    return ( 
        <div>
    
        <div className='taskBox'>
        {isPending ? <h1>Loading...</h1>: goal.map((item)=>{
            return <Goal key={item.id} id={item.id} name={item.title} desc={item.desc} status={item.status} statusHandler={statusHandler}/>
        })}
        </div>
        </div>
     );

}
export default Task;