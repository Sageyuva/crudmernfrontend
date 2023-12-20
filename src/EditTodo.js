import React, { useEffect, useState } from 'react'
import "./add.css"
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'



const EditTodo = () => {

  const {id} = useParams();
  const [heading, setheading] = useState("");
  const [caption, setcaption] = useState("");
  const navi = useNavigate();

   

  const UpdateData = (e) => {
    e.preventDefault();
     axios.put(`http://localhost:3001/updatepost/${id}` , {caption , heading })
     .then(result => {
      console.log(result)
      navi('/')
     })
     .catch(err => console.log(err) )
  }
  


  useEffect(() => {

    axios.get(`http://localhost:3001/getpost/${id}`)
    .then(results => {
      console.log(results)
      setheading(results.data.heading)
      setcaption(results.data.caption)
    })
    .catch(err => console.log(err))
  } , [])


  return (
    <form onSubmit={UpdateData} className='form'>
<input className='input' value={heading} onChange={(e)=>  setheading(e.target.value)} placeholder='Add Heading' type="text" />
<input className='input' value={caption} onChange={(e)=> setcaption(e.target.value)}placeholder='Add Caption' type="text" />
<button type='submit' className='btt'>Submit</button>

    </form>

  )
}

export default EditTodo