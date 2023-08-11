import LoginForm from "./LoginForm";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log("LOGIN TOKEN", token);
  const handleClick = () => {
    localStorage.removeItem("token", token);
    navigate("/");
  };
  return (
    <>
      <Header />
      {token ? (
        <button onClick={handleClick}>Log Out</button>
      ) : (
        <h1>NOT LOGGED IN</h1>
      )}
      <LoginForm />
      <button onClick={() => navigate("/register")}>Sign UP</button>
    </>
  );
};
export default Login;
