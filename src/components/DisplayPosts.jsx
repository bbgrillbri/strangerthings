import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../API/main";

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
      <div className="container">
        <h1>Welcome to Stranger Things!</h1>
        <h2>Search</h2>
        <input
          type="search"
          placeholder="Search Posts"
          onChange={handleChange}
        />
        <button className="btn" onClick={() => navigate(`/newpost`)}> Create a Post</button>
      </div>
      {postsToDisplay.map((post) => (
        <div key={post._id} className="container">
          <h1>{post.title}</h1>
          <h4>Posted by: {post.author.username}</h4>
          <h3>{post.description}</h3>
          <h3>Asking Price: {post.price}</h3>
          <h3>Location: {post.location}</h3>
          <h3>Will Deliver: {post.willDeliver ? "Yes" : "No"}</h3>

          {token && (
            <button className="btn" onClick={() => navigate(`/${post._id}`)}> View Post</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayPosts;
