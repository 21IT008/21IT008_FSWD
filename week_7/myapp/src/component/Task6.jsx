import React,{useState} from 'react'
const Task6 = () => {
    const list = [
        {
          "name" : "Harsh",
          "marks" : 45
        },
        {
          "name" : "om",
          "marks" : 98
        },
        {
          "name" : "Aryan",
          "marks" : 90
        }
      ]

        const [llist, setlist] = useState(list)
  return (
    <>
        {llist.map((list)=>{
          if(list.marks > 35)
          return <div>{list.name}</div>
        })}
    </>
  )
}

export default Task6


