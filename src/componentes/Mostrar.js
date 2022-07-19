import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';



function Mostrar(){
    const url = ' http://www.raydelto.org/agenda.php'
  const [todos, setTodos] = useState()
  const fetchApi = async ()=>{
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }
  useEffect(()=>{
    fetchApi()

  },[])
  return (
    <div className="App">
      
        {
          !todos ? 'Cargando...':
          todos.map( (todo, index)=>{
            return (
            <div key={index}>
                {todo.nombre} {todo.apellido} {todo.telefono}
                </div>
            )
          })
      }
      
       
    </div>
  );
}
export default Mostrar;