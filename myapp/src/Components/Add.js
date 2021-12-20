import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Add=(props)=>{
return (
    <div className='addBox'>
    <div className='addTask'><Link style={{textDecoration:'None',color:'rgb(51, 56, 52)'}} to={'/add'} >Add Task</Link></div>
    </div>
);
}
export default Add;