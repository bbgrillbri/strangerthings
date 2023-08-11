import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import CreatePostForm from "./components/CreatePostForm";
import EditPostForm from "./components/EditPostForm";
import DisplaySinglePost from "./components/DisplaySinglePost";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post" element={<DisplaySinglePost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpost" element={<CreatePostForm />} />
        <Route path="/:postId" element={<EditPostForm />} />
      </Routes>
    </div>
  );
}
