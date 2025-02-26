import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/shop" className="mr-4">Shop</Link>
      <Link to="/cart" className="mr-4">Cart</Link>
    </nav>
  );
};

export default Navbar;
