import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Post from "./components/Post";
import Profile from "./components/Profile";
import CreatePostForm from "./components/CreatePostForm";
import EditPostForm from "./components/EditPostForm";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpost" element={<CreatePostForm />} />
        <Route path="/:postId" element={<EditPostForm />} />
      </Routes>
    </div>
  );
}
