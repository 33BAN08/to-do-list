import React, { useEffect } from 'react'
import Create from './Create'
import {useState} from 'react'
import axios from 'axios'
import './App.css';
import { BsCircleFill ,BsFillTrashFill} from 'react-icons/bs';

export default function Home() {
    const [todos,setTodos]=useState([])
    useEffect(()=>{axios.get('http://localhost:3001/get')
    .then(res=>setTodos(res.data))
    .catch(err=>console.log(err))},[])
    const handleEdit = (id) => {
      console.log("Editing ID:", id);
      
      axios.put(`http://localhost:5000/update/${id}`)
      .then(res => console.log("Response:", res.data))
      .catch(err => console.log("Error:", err));
  };
  
  return (
    <div className='home'> 
        <h2>Todo List </h2>
        <Create/>
       
       
        {
            todos.length===0 
            ? 
          <h2>No todos</h2>
            :

            todos.map(todo =>(
            <div className='task' key={todo._id}>
                  <div className="checkbox" onClick={()=>handleEdit(todo._id)}>
                     <p>{todo.task}</p>
                   </div>
                  <div>
                    <span><BsFillTrashFill className='icon'/></span>
                  </div>
                  
                </div>
            ))
            

            }
        
    </div>
  )
}
