import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../API/main";
import Header from "./Header";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.length < 1) {
      alert("Your username must be at minimum 5 characters in length");
    } else if (password.length < 1) {
      alert("Your password must be at minimum 8 characters in length");
    } else {
      try {
        const result = await login(username, password);
        localStorage.setItem("token", result.data.token);
        navigate("/profile");
      } catch (error) {
        setError("Username or Password is incorrect, please try again!");
      }
    }
  };

  return (
    <>
      <Header />
      <div className="container">
      <h2>Sign In</h2>
      {error && <p>{error}</p>}
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
      <button onClick={() => navigate("/register")}>Sign Up</button>
      </div>
    </>
  );
};
export default Login;
