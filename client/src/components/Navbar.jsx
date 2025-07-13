import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          MERN Blog
        </Link>

        <div className="space-x-4">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="hover:text-blue-400 transition-colors font-medium"
          >
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
