import React, { Component } from 'react';
import Task from './Task';
import '../App.css';
const Goal=(props)=>{
return (
    <div className='goalBox'>
    <div className='goalItms goalName'>{props.name}</div>
    <p className='goalItms goalDesc'>{props.desc}</p>
    <div className='goalItms goalStatus' onClick={()=>props.statusHandler(props.id)}>{props.status}</div>
    </div>
);
}
 
export default Goal;