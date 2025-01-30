import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/authSlice';

function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <div>
        <Link to="/dashboard" className="text-2xl font-semibold">My Dashboard</Link>
      </div>
      <div>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-800 py-2 px-4 rounded-md">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
