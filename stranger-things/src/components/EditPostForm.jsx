import { updatePost } from "../API/main";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditPostForm = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  async function handleUpdate() {
    try {
      const result = await updatePost(userId);
      console.log("Update", result);
      navigate("/post");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <button onClick={handleUpdate}>Edit Post</button>
    </div>
  );
};

export default EditPostForm;
