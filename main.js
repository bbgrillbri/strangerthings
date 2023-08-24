
const COHORT_NAME = "2302-ACC-CT-WEB-PT-A";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

//const token = localStorage.getItem("token");

//Register User
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    // You can log ▲▲▲ the result
    // here ▼▼▼ to view the json object before returning it
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// Login
export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result;

    
  } catch (err) {
    console.error(err);
  }
};

// Get User Data
export const myData = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

//fetch posts
export const fetchPosts = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// Create a post
export const makePost = async (title, description, price) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: "New York, NY",
          willDeliver: true
        }
      })
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//Edit Post
export const updatePost = async (postId) => {
  const token = localStorage.getItem("token");
  try {
    // You will need to insert a variable into the fetch template literal
    // in order to make the POST_ID dynamic.
    // 5e8d1bd48829fb0017d2233b is just for demonstration.
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: "My favorite stuffed animal Edited Again!!",
          description:
            "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
          price: "$480.00",
          location: "New York, NY",
          willDeliver: true
        }
      })
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
// Delete Post
export const deletePost = async (postId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

// Post Message
export const postMessage = async (postId, userMessage) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        message: {
          content: userMessage
        }
      })
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
