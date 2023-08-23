import { makePost } from "../API/main";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);
  const navigate = useNavigate();

  async function handleCreatePost(e) {
    e.preventDefault();
    const result = await makePost(title, description, price, location, deliver);
    console.log("Made Post", result);
    navigate("/");
  }

  return (
    <div className="container">
      <h1> Add New Post </h1>
      <form onSubmit={handleCreatePost}>
        <label> Title:
        <input
          value={title}
          type="text"
          name="title"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        </label>
        <br></br>
        <label> Description:
        <input
          value={description}
          type="text"
          name="description"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        </label>
        <br></br>
        <label> Price: 
        <input
          value={price}
          type="text"
          name="price"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        </label>
        <br></br>
        <label> Loaction:
        <input 
          value={location}
          type="text"
          name="location"
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
        </label>
        <br></br>
        <label> Will Deliver:
        <input
          value={deliver}  
          type="checkbox"
          name="deliver" 
          onChange={(e) => setDeliver(!deliver)} />
          </label>
          <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
