import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const handleClick = () => {
    localStorage.removeItem("token", token);
  };

  return (
    <header>
      <h1>Stranger Things</h1>
      {!token && (
        <div>
          <Link to="/">POSTS</Link>
          <Link to="/login">LOGIN</Link>
        </div>
      )}
      {token && (
        <div>
          <Link to="/">POSTS</Link>
          <Link to="/profile">PROFILE</Link>
          <Link to="/login" onClick={handleClick}>
            LOG OUT
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
