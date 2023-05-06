// import './login.css';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Login(){
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [user, setUsers] = useState("");


//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     }

//     // Validate form fields here.
//     if (!username || !password) {
//       alert ("Both username and password are required.");

//     }

//     // Submit data to backend.
//     console.log("Submitting login data...");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {errorMessage && <div className="error">{errorMessage}</div>}
//         <label htmlFor="username">Username</label>
//         <input type="text" onChange={handleUsernameChange} value={username} />
//         <label htmlFor="password">Password</label>
//         <input type="password" onChange={handlePasswordChange} value={password} />
//       <button type="submit">Login</button>
//       Not registered<Link to= "/signup">Register Now! </Link>
      
//     </form>
//   )
// } 

// export default Login;

import { useState } from 'react';
import "./styles/login.css";
import { useNavigate,Link, } from "react-router-dom";



function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword ,setshowPassword] = useState(false);
  const navigate = useNavigate();




  const togglePassword = () =>{
    setshowPassword( !showPassword );
  };


  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    // Validate form fields.
    if (!email || !password) {
      setErrorMessage("Both username and password are required.");
      return;
    }

    try {
      // Send login request to backend.
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Incorrect username or password");
      }

      // Successful login.
      setIsLoggedIn(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if(isLoggedIn){
    navigate('/dashboard')
  }
 

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <label htmlFor="username">Username</label>
      <input type="text" name="email" onChange={handleemailChange} value={email} />
      <div className="password-wrapper">
      <label htmlFor="password">Password</label>
        <input type={showPassword ? "text" : "password"} name="password" onChange={handlePasswordChange} value={password}  />
        <span className="toggle-password" onClick={togglePassword}>{showPassword ? "Hide" : "Show"}</span>
      </div>
      <button type="submit">Login</button>
      Not registered<Link to= "/signup">Register Now! </Link>
    </form>
  );
}

export default Login;