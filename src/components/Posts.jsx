import { useNavigate } from "react-router-dom";
import DisplayPosts from "./DisplayPosts";
import Header from "./Header";

const Posts = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleClick = () => {
    localStorage.removeItem("token", token);
    navigate("/");
  };

  return (
    <div>
      <Header />
      <DisplayPosts />
    </div>
  );
};

export default Posts;
