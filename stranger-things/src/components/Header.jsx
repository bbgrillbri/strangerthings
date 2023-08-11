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
          <Link to="/post">POSTS</Link>
          <Link to="/">LOGIN</Link>
        </div>
      )}
      {token && (
        <div>
          <Link to="/post">POSTS</Link>
          <Link to="/profile">PROFILE</Link>
          <Link to="/" onClick={handleClick}>
            LOG OUT
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
