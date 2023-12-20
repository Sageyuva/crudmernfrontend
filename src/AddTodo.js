import React, { useState } from 'react'
import "./add.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddTodo = () => {



    const [heading, setheading] = useState("");
    const [caption, setcaption] = useState("");
    const navi = useNavigate();



    const OnsubmitF = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/addpost" , {heading , caption})
        .then(results => console.log(results))
        .catch(err =>console.log(err))
        alert("todo added");
        navi("/")
    }

  return (
    <>
    <form onSubmit={OnsubmitF} className='form'>
<input className='input' value={heading} onChange={(e)=>  setheading(e.target.value)} placeholder='Add Heading' type="text" />
<input className='input' value={caption} onChange={(e)=> setcaption(e.target.value)}placeholder='Add Caption' type="text" />
<button type='submit' className='btt'>Submit</button>

    </form>
    </>
  )
}

export default AddTodo