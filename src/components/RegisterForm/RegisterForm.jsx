import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

export default function RegisterForm(){

    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");

    const [message, setMessage]=useState("Start Filling Register Form");
    
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!firstName || !lastName || !email || !password){
            setMessage("Please fill all fields");
        }else if(password!==confirmPassword){
            setMessage("Passwords do not match!");
        }else{
            setMessage("Registred successfully!");

            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");


            setTimeout(()=>navigate("/login"), 1500)
        }
    };

    return(
        <div className="main-container">
            <form className="authForm" onSubmit={handleSubmit}>
                <h1>Registration</h1>

                <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>
                <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
                <input type="email" placeholder="someone@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>

                <button type="submit" className="btnSubmit">Register</button>

                <p>
                    Already Registered?{" "}
                    <button 
                        type="button"
                        onClick={() => navigate("/login")}
                        className="btnLink"
                    >
                        Login
                    </button>
                </p>

                <button type="submit" className="btnGoToMP">Go To Mainpage</button>

                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );

};