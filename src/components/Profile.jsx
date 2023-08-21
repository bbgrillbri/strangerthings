import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import { myData } from "../API/main";

const Profile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getUsersData() {
      const responce = await myData();
      console.log("Messages", responce.data.messages);
      console.log("Posts", responce.data.posts);
      if (responce.success) {
        setUserPosts(responce.data.posts);
        setMessages(responce.data.messages);
        setUser(responce.data.username);
      }
    }
    getUsersData();
  }, []);

  return (
    <div>
      <Header />
      <h1> Hello {user} </h1>
      <h1> Posts </h1>
      {userPosts &&
        userPosts.map((post) => (
          <div key={post._id} className="player-container">
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            <h3>{post.price}</h3>
            <h3>{post.author.username}</h3>
            {post.messages.map((message) => (
            <div key={message._id}>
              <h3>{message.content} {message.fromUser.username}</h3>
            </div>
          ))}
          </div>
        ))}
      <h1> Messages </h1>
      {messages &&
        messages.map((message) => (
          <div key={message._id} className="player-container">
            <h2>{message.post.title}</h2>
            <h3>{message.fromUser.username}</h3>
            <h3>{message.content}</h3>
          </div>
        ))}
    </div>
  );
};

export default Profile;
