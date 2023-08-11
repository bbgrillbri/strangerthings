import SignUpForm from "./SignUpForm";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
      <SignUpForm />
    </>
  );
};
export default SignUp;
