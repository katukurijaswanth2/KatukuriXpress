import { useState } from "react";
import { Login } from "./Login";
import "./SignIn.css";

export const SignIn = () => {


  const handleSubmit = (e) => {
  e.preventDefault();

  // ✅ create user object
  const userData = {
    FirstName,
    LastName,
    Email,
    Password,
  };

  // ✅ store in localStorage
  localStorage.setItem("user", JSON.stringify(userData));

  console.log("User saved:", userData); // optional for testing

  // ✅ redirect after signup (optional)
  window.location.href = "/";
};
  const [FirstName,setFirstName]=useState("");
const [LastName, setLastName] = useState("");
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");


  return (
  
          <form className="form" onSubmit={handleSubmit}>


            <p className="title">
              <span className="dot"></span>
              <span className="dot pulse"></span>
              Register
            </p>

            {/* Message */}
            <p className="message">
              Signup now and get full access to our app.
            </p>

            {/* First + Last Name */}
            <div className="flex-row">
              <label>
                <input name="Firstname" required type="text" className="input" value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <span>Firstname</span>
              </label>

              <label>
                <input name="Lastname"required type="text" className="input" value={LastName} onChange={(e)=>setLastName(e.target.value)} />
                <span>Lastname</span>
              </label>
            </div>

            {/* Email */}
            <label>
              <input name="email" required type="email" className="input" value={Email} onChange={(e)=>setEmail(e.target.value)} />
              <span>Email</span>
            </label>

            {/* Password */}
            <label>
              <input name="password" required type="password" className="input" value={Password} onChange={(e)=>setPassword(e.target.value)} />
              <span>Password</span>
            </label>

            {/* Confirm Password */}
            <label>
              <input  required type="password" className="input" />
              <span>Confirm password</span>
            </label>

            {/* Button */}
            <button type="submit" className="submit">Submit</button>

            {/* Signin */}
            <p className="signin">
              Already have an account? <span>Signin</span>
            </p>

          </form>
    
  );
};