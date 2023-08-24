import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost, fetchPosts, postMessage } from "../API/main";
import { useParams } from "react-router-dom";
import Header from "./Header";

const DisplaySinglePost = () => {
  const [post, setPost] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const { postId } = useParams();
  const navigate = useNavigate();

  async function getAllPosts() {
    const response = await fetchPosts();
    const posts = response.data.posts;
    const filteredPosts = posts.filter(post => {
      return post._id.includes(postId);
    });
    setPost(filteredPosts);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  async function handleMessage() {
    try {
      const result = await postMessage(postId, message);
      getAllPosts();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(postId) {
    try {
      const result = await deletePost(postId);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Header />
      <div className="main-container">
      {post.map((post) => (
        <div key={post._id} className="container">
          <h1>{post.title}</h1>
          <h4>Posted by: {post.author.username}</h4>
          <h3>{post.description}</h3>
          <h3>Asking Price: {post.price}</h3>
          <h3>Location: {post.location}</h3>
          <h3>Will Deliver: {post.willDeliver ? "Yes" : "No"}</h3>

          {token && post.isAuthor && (
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          )}
          {token && !post.isAuthor && (
            <div>
              <h3>Message</h3>
              <form>
                <input
                  value={message}
                  type="text"
                  name="message"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </form>
              <button onClick={() => handleMessage()}>
                Submit
              </button>
            </div>
          )}
          {post.messages.map((message) => (
            <div key={message._id}>
              <h3>{message.content} {message.fromUser.username}</h3>
            </div>
          ))}
        </div>
      ))}
      <button onClick={() => navigate(`/`)}> Back to Posts</button>
      </div>
    </div>
  );
}

export default DisplaySinglePost;