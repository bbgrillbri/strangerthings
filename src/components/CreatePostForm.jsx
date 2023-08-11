import { makePost } from "../API/main";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  //const [location, setLocation] = useState("");
  //const [deliver, setDeliver] = useState(false);
  const navigate = useNavigate();

  async function handleCreatePost(e) {
    e.preventDefault();
    const result = await makePost(title, description, price);
    console.log("Made Post", result);
    navigate("/post");
  }

  return (
    <div>
      <h1> Add New Post </h1>
      <form onSubmit={handleCreatePost}>
        <input
          value={title}
          type="text"
          name="title"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={description}
          type="text"
          name="description"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={price}
          type="text"
          name="price"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
