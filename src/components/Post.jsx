import { useNavigate } from "react-router-dom";
import DisplayPosts from "./DisplayPosts";
import Header from "./Header";

const Post = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleClick = () => {
    localStorage.removeItem("token", token);
    navigate("/");
  };

  return (
    <div>
      <Header />
      {token ? 
      <div>
        <h1>LOGGED IN</h1>
        <button onClick={handleClick}>Log Out</button>
        <button onClick={() => navigate("/newpost")}>Add New Post</button>
      </div>
      : <h1>NOT LOGGED IN</h1>}
      <DisplayPosts />
    </div>
  );
};

export default Post;
