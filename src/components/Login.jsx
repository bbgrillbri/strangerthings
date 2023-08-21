import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../API/main";
import Header from "./Header";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("LOGIN TOKEN", token);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.length < 1) {
      alert("Your username must be at minimum 5 characters in length");
    } else if (password.length < 1) {
      alert("Your password must be at minimum 8 characters in length");
    } else {
      try {
        console.log("name", username);
        console.log("password", password);
        const result = await login(username, password);
        console.log("Login", result);
        localStorage.setItem("token", result.data.token);
        navigate("/profile");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <Header />
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label value={username} onChange={(e) => setUsername(e.target.value)}>
          Username: <input />
        </label>
        <br></br>
        <label value={password} onChange={(e) => setPassword(e.target.value)}>
          Password: <input />
        </label>
        <br></br>
        <button>Submit</button>
      </form>
      <button onClick={() => navigate("/register")}>Sign UP</button>
    </>
  );
};
export default Login;
