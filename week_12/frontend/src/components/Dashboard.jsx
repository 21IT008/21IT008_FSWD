import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './styles.css';
import {useNavigate} from "react-router-dom"
function Dashboard() {
    const navigate = useNavigate();
    const [response, setResponse] = useState('');

useEffect(() => {
    axios.get('http://localhost:8000/dashboard', { withCredentials: true })
        .then((response) => {
            setResponse(response.data);
            console.log(response.data + " available");
        })
        .catch((e) => {
            console.log(e.message);
        });
}, []);

    async function logout(){
        const res=await axios.get('http://localhost:8000/logout',{ withCredentials: true })
        console.log("deleted")
        if(res.data=="deleted")
        navigate('/')
    }
    return (  <div className='dashboarddiv'>
        {response}
        <button onClick={logout}>Logout</button>
    
    </div>
    );
}

export default Dashboard;