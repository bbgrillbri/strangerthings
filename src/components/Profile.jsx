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
        setUser(responce.data.username);
        const messages = responce.data.messages;
        const filteredMessages = messages.filter(message => {
          return message.fromUser.username === user;
        });
        setMessages(filteredMessages);
      }
    }
    getUsersData();
  }, []);

  return (
    <div>
      <Header />
      <h1> Hello {user} </h1>
      <h1> My Posts </h1>
      {userPosts &&
        userPosts.map((post) => (
          <div key={post._id} className="container">
            <h1>{post.title}</h1>
            <h3>{post.description}</h3>
            <h3>Asking Price: {post.price}</h3>
            <h3>Location: {post.location}</h3>
            <h3>Will Deliver: {post.willDeliver ? "Yes" : "No"}</h3>
            <h2> Post Messages</h2>
            {post.messages.map((message) => (
              <div key={message._id}>
                <h3>{message.content} {message.fromUser.username}</h3>
              </div>
            ))}
          </div>
        ))}
      <h1> My Messages </h1>
      {messages &&
        messages.map((message) => (
          <div key={message._id} className="container">
            <h2>{message.post.title}</h2>
            <h3>{message.content}</h3>
          </div>
        ))}
    </div>
  );
};

export default Profile;
