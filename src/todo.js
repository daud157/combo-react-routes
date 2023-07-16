import React, { useState } from 'react';
// import Nnav from './nnav';
function TodoApp() {
  const [newTodo,setTodo]=useState("");
  const [Todo,newTodos]=useState([]);

  let getValue=(event)=>{
   
   setTodo(event.target.value);
  };


  const addTodo=()=>{
    if(newTodo.trim()!==''){
     
      newTodos([...Todo,newTodo]);
      // setTodo=("");
        setTodo("");
      

    }
    };
  const handledelete=(index)=>{
  
    let updataed=[...Todo];
    updataed.splice(index,1);
    newTodos(updataed);
    
  }
 return(
  
<div className='bg-purple-950 w-screen h-screen flex justify-center items-center '>
 
  <div className='h-2/3 w-1/4 bg-red-500 border rounded-lg '>
             <span className='block text-center text-2xl mt-5 font-bold '>ToDo List App</span>
            <input className='ml-4 mt-3 py-1 bg-transparent border  rounded-lg border-xl text-white border-purple-950 placeholder:text-white' type="text" value={newTodo} placeholder='Add a new todo' onChange={getValue}/>
            <button className='ml-5  bg-purple-950 inline-block px-10  border rounded-lg text-white  ' onClick={addTodo}>ADD  </button>
            <ol className='space-y-3 mt-6'>
             {Todo.map((todo,index)=>(
              <li className=' py-1 px-10 ml-3 mr-2 border rounded-2xl text-lg shadow-2xl ' key={index}>{todo}
              <button  className='float-right  text-sm bg-purple-950 text-white px-5 border rounded-lg border-red-600 shadow-2xl mt-1' onClick={()=>handledelete(index)}> Delete</button>
              </li>
             ))}
            
             
            </ol>
  </div>
  </div>
 );
}
export default TodoApp