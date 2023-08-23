import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import { myData } from "../API/main";

const Profile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getUsersData() {
      const response = await myData();
      if (response.success) {
        setUserPosts(response.data.posts);
        setUser(response.data.username);
        setUserMessages(response.data.messages);
      }
    }
    getUsersData();
  }, []);

  return (
    <div>
      <Header />
      <h1> Hello {user} </h1>
      <h1> My Posts </h1>
      {userPosts.length === 0 && <h2>You have not posted anything!</h2>}
      {userPosts.map((post) => (
        <div key={post._id} className="container">
          <h1>{post.title}</h1>
          <h3>{post.description}</h3>
          <h3>Asking Price: {post.price}</h3>
          <h3>Location: {post.location}</h3>
          <h3>Will Deliver: {post.willDeliver ? "Yes" : "No"}</h3>
          <h2> Post Messages</h2>
          {post.messages.map((message) => (
            <div key={message._id}>
              <h3>{message.content}</h3>
              <h3>From: {message.fromUser.username}</h3>
            </div>
          ))}
        </div>
      ))}
      <h1> My Messages </h1>
      {userMessages.length === 0 && <h2>You have not messaged anyone!</h2>}
        {userMessages.map((message) => (
          message.fromUser.username === user && (
            <div key={message._id} className="container">
              <h2>{message.post.title}</h2>
              <h3>Posted By: {message.post.author.username}</h3>
              <h3>Your Message: {message.content}</h3>
            </div>
          )))}
    </div>
  );
};

export default Profile;
