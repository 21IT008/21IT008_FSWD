import logo from './logo.svg';
import './App.css';
import './components/styles.css'
import Loginform from './components/Loginform';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
function App() {
  return (
  <>
    <BrowserRouter>
    <Link to='/dashboard'>Dashboard</Link>{" "}||{" "} 
    <Link to='/'>Login</Link>
    <Routes>
      <Route path='/' element={<Loginform />}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
