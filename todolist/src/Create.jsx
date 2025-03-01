import React from 'react';
import axios from 'axios';
import {useState} from 'react'


export default function Create() {
    const [task , setTask]=useState('') 
    const handleAdd=()=>{
        axios.post('http://localhost:3001/add',{task:task})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div className='create-form'>
     <input type='text' name='' id='' onChange={(e) => setTask(e.target.value)}/>
     <button onClick={handleAdd} >Add somthing </button>
    </div>
  )
}
