import { useSelector } from 'react-redux';
import MetaTags from '../../seo/MetaTags';
import Analytics from './Analytics';

function Dashboard() {
  const { userRole } = useSelector((state) => state.auth);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <MetaTags title="Dashboard - My App" description="User Dashboard with analytics and reports." />
      <div className="w-full max-w-5xl bg-white shadow-lg p-8 rounded-2xl text-center">
        <h2 className="text-4xl font-bold">Dashboard</h2>
        <p className="mt-4 text-lg">Welcome, {userRole}!</p>
        {userRole === 'admin' && (
          <div className="mt-6">
            <div className="w-full max-w-6xl mx-auto">
              <Analytics />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
