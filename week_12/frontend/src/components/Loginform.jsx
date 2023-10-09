import React, { useState } from "react";
import axios from "axios";
import './styles.css';

import {useNavigate} from "react-router-dom"
function Loginform() {
  const [name, Setname] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event){
    event.preventDefault();
    const res = await axios.post('http://localhost:8000/login', {name: name, password: password}, {withCredentials: true});
    if(res.data=="success"){
      navigate("/dashboard");
    }
    else{
      console.log(res.data);
    } 
}
  return (
    <>
      <div className="logindiv">
        Name :{" "}
        <input
          type="text"
          name="Name"
          onChange={(e) => {
            Setname(e.target.value);
          }}
        />
        Password :{" "}
        <input
          type="text"
          name="Password"
          onChange={(e) => {
            Setpassword(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </>
  );
}

export default Loginform;
