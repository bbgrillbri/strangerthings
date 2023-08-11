import { useNavigate } from "react-router-dom";
import Header from "./Header";
const DisplaySinglePost = () => {
    const navigate = useNavigate();

        return(
            <div>
                <Header />
                <h1> Show Post </h1>
                <h2>Show messages</h2>
                <h2> if User is author show edit/delete buttons </h2>
                <h2> not author show leave a message</h2>
                <button onClick={() => navigate(`/posts`)}> Back to Posts</button>
            </div>
        )


}

export default DisplaySinglePost;