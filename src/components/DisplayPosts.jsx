import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost, fetchPosts, postMessage } from "../API/main";

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllPosts() {
      const response = await fetchPosts();
      console.log("Posts", response);
      setPosts(response.data.posts);
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
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const postMatches = (post, searchTerm) => {
    const { title, description, price, author } = post;
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(lowerCaseTerm) ||
      description.toLowerCase().includes(lowerCaseTerm) ||
      price.toLowerCase().includes(lowerCaseTerm) ||
      author.username.toLowerCase().includes(lowerCaseTerm)
    );
  };

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div>
      <h2>Search</h2>
        <input
          type="search"
          placeholder="Search Posts"
          onChange={handleChange}
        />
      {postsToDisplay.map((post) => (
        <div key={post._id} className="player-container">
          <h2>{post.title}</h2>
          <h3>{post.description}</h3>
          <h3>{post.price}</h3>
          <h4>{post.author.username}</h4>
          <h6>{post._id}</h6>
          {token &&   (
            <button onClick={() => navigate(`/post`)}> View Post</button>
          )}
          {token && post.isAuthor &&   (
            <button onClick={() => navigate(`/${post._id}`)}>Test Edit</button>
          )}
          {token && post.isAuthor && (
            <button onClick={() => handleDelete(post._id)}>Test Delete</button>
          )}
          {token && !post.isAuthor && (
            <button onClick={() => handleMessage(post._id)}>
              Test Message
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayPosts;
