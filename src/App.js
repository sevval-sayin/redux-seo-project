import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/dashboard/Dashboard';
import Analytics from './components/dashboard/Analytics';
import UserManagement from './components/dashboard/UserManagement';
import Login from './components/auth/Login';
import PrivateRoute from './components/shared/PrivateRoute';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* PrivateRoute kullanımını burada yapıyoruz */}
          <Route 
            path="/dashboard" 
            element={<PrivateRoute element={<Dashboard />} roles={['user', 'admin']} />} 
          />
          <Route 
            path="/analytics" 
            element={<PrivateRoute element={<Analytics />} roles={['admin']} />} 
          />
          <Route 
            path="/user-management" 
            element={<PrivateRoute element={<UserManagement />} roles={['admin']} />} 
          />

          {/* Fallback route for "/": Add a route for the root path */}
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
