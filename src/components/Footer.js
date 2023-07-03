import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Created &copy; 2023</p>
      <Link to="/about">about</Link>
    </footer>
  );
};

export default Footer;
