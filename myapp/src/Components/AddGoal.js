import React, { Component,useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css';

const AddGoal =()=> {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const [isPending,setIsPending] = useState(true);
const navigate = useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault();
    var status = "Done?";
    const newGoal = {title,desc,status};
    fetch('http://localhost:8000/data',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newGoal)

}).then(()=>{ setIsPending(false);console.log("Form added")}).catch((err)=>{console.log(err.message)})


navigate('/');
}
return (

<form onSubmit={handleSubmit}>

<div id="main_block_login">
    <div id="subblock_login">
    <div  id="login_form">
<div><img src="login_log.png" id="login_log_img" alt=""/></div>
<div class="log_sub_section">
<div><label for="Crypto Email" className="label_font">Task Title</label></div>
<div><input className="login_input" type="text" id="Crypto Email" name="title" placeholder="" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/></div>
</div>

<div className="log_sub_section">
<div><label for="Crypto Password" className="label_font">Task description</label></div>
<div><input className="login_input" type="text" id="Crypto Password" name="desc" placeholder=""  value={desc} onChange={(e)=>{setDesc(e.target.value)}} required/></div>
</div>

<div className="log_sub_section">{isPending?<button type="submit" id="login_button">Add Task</button> : <button type="submit" id="login_button disabled">Added</button> }</div>
</div>
    </div>
</div>


{/* <div className='form_part_1'>
<div>
<label for = "title">Goal Title</label>
</div>
<div>
<input className='form_part_input' type="text" name="title" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required />
</div>
</div>
<div className='form_part_1'>
<div>
<label for = "desc">Goal Desc</label>
</div>
<div>
<input className='form_part_input' type="text" name="desc" id = "desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} required />
</div>
</div>
<div>
{!isPending ? <button disabled>Task Added</button>: <button type='submit'>Add Task</button> }
</div> */}
</form>




);



}
export default AddGoal;