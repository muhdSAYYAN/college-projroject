import React, { useState } from "react";
import "./Login.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    utype: "",
    uname: "",
    password: "",
  });

  const [inputs, setInputs] = useState({
    uname: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

  const [err , setErr] = useState(null);

  const handleChange = (e)=>{
    const {name , value} = e.target;
    setRegister((prev)=>({...prev,[name]:value}))
  }

  const handleRegister = async (e)=>{
    e.preventDefault()
    // console.log("register",register)
    if (!register.uname || !register.password || !register.name || !register.email || !register.utype) {
        setErr("Please enter both username and password");
        return;
      }
    try{
      const res = await axios.post("http://localhost:8900/api/auth/register",register,{withCredentials:true});
      console.log("object",res)
      alert("Registerd successfully")
      setRegister({
        name: "",
        email: "",
        utype: "",
        uname: "",
        password: "",
      })
      setIsSignUp(false);
    }catch(err){
      setErr(err.response.data)
    }
  }

  const navigate = useNavigate()

  const handleChangeLogin = (e)=>{
    const {name , value} = e.target;
    setInputs((prev)=>({...prev,[name]:value}))
  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    console.log("log",inputs)
    if (!inputs.uname || !inputs.password) {
        setErr("Please enter both username and password");
        return;
      }
    try{
      const res = await axios.post("http://localhost:8900/api/auth/login",inputs,{withCredentials:true});
      console.log("log",res)
      const userData = res.data;
      setCurrentUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      console.log('mydata: ',userData);
      if(userData.usertype === "Teacher"){
        navigate("/teacher")
      }
      setInputs({
        uname: "",
        password: "",
      })
    }catch(err){
      setErr(err.response.data)
    }
  }
  


  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="Loginpage">
      <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
        <div className="form-container sign-up-container">
          <form action="#" className="login-form">
            <h1>Create Account</h1>

            <input className="login-input" type="name" placeholder="Name" name="name" value={register.name} onChange={handleChange}/>
            <input className="login-input" type="email" placeholder="Email" name="email" value={register.email} onChange={handleChange}/>
            
            <select  name="utype"
              id="utype"
              className="login-select"
              value={register.utype}
              onChange={handleChange} >
              <option value="student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>

            <input
              className="login-input"
              type="username"
              placeholder="Username"
              name="uname"
              value={register.uname}
              onChange={handleChange}
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              name="password"
              value={register.password}
              onChange={handleChange}
            />
             {err && err}
            <button className="login-button" onClick={handleRegister}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">


          <form action="#" className="login-form">
            <h1>Sign in</h1>

            <input className="login-signin" 
             type="username"
             placeholder="Username"
             name="uname"
             onChange={handleChangeLogin}
              />
            <input
              className="login-signin"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChangeLogin}
            />
            <a href="#">Forgot your password?</a>
            {err && err}
            <button className="login-button" onClick={handleLogin}>Sign In</button>
          </form>


        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="login-button ghost"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="login-button ghost"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
