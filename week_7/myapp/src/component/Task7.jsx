import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Contact from './Contact'

const Task7 = () => {
  return (
    <>
    <Router>
    <h1>TASK-7</h1>
    <nav>
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/Blog">Blog</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </nav>
    </Router>
    </>
  )
}
 
export default Task7
