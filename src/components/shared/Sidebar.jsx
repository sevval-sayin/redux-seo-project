import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-5 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Navigation</h2>
      </div>
      <ul>
        <li>
          <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
            Admin Panel
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
