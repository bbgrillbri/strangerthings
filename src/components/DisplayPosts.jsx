import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost, fetchPosts, postMessage } from "../API/main";

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllPosts() {
      const response = await fetchPosts();
      console.log("Posts", response);
      if (response.success) {
        setPosts(response.data.posts);
      }
    }
    getAllPosts();
  }, []);

  async function handleMessage(postId) {
    try {
      const result = await postMessage(postId);
      console.log("Message", result);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(postId) {
    try {
      const result = await deletePost(postId);
      console.log("Delete", result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="player-container">
          <h2>{post.title}</h2>
          <h3>{post.description}</h3>
          <h3>{post.price}</h3>
          <h4>{post.author.username}</h4>
          <h6>{post._id}</h6>
          {token && post.isAuthor &&   (
            <button onClick={() => navigate(`/${post._id}`)}>Edit</button>
          )}
          {token && post.isAuthor && (
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          )}
          {token && !post.isAuthor && (
            <div>
            <button> View Post</button>
            <button onClick={() => handleMessage(post._id)}>
              Leave Message Test
            </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayPosts;
