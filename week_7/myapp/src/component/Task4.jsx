import React,{useState} from 'react'

const Task4 = () => {

  const [counters,setcounter] = useState(0)


  return (
    <>
  
      <button onClick={()=>setcounter(counters+1)}>Counters Update:-</button>
      
      <p>Hook Component Number of Counts :- {counters}</p>
      
    </>
  )
}

export default Task4
