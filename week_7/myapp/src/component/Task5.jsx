import React ,{useState} from 'react'

const Task5 = () => {

    const Tasks = [
        {
            "name" : "Task1",
            "display" : true
        },
        {
            "name" : "Task2",
            "display" : false
        },
        {
            "name" : "Task3",
            "display" : true
        },
        {
            "name" : "Task4",
            "display" : true
        },
        {
            "name" : "Task5",
            "display" : false
        }
    ]

    const [list,setlist] = useState(Tasks)

  return (
    <>
    
        {list.map((ele)=>{
            if(ele.display)
            return <div>Tasks that are enable to be displayed : {ele.name}</div>
        })}
    </>
  )
}

export default Task5

