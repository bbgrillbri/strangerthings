import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../API/main";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("username", username);
    if (username.length < 2) {
      alert("Your username must be at minimum 6 characters in length");
    } else if (password.length < 2) {
      alert("Your password must be at minimum 8 characters in length");
    } else {
      try {
        const result = await registerUser(username, password);
        console.log("SignUp", result);
        localStorage.setItem("token", result.data.token);
        //const token = localStorage.getItem("token");
        navigate("/post");
      } catch (error) {
        setError(error.message);
      }
    }
  };
  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label value={username} onChange={(e) => setUsername(e.target.value)}>
          {" "}
          Username: <input />{" "}
        </label>
        <br></br>
        <label value={password} onChange={(e) => setPassword(e.target.value)}>
          {" "}
          Password: <input />{" "}
        </label>
        <br></br>
        <button>Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
