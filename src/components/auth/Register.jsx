import MetaTags from '../../seo/MetaTags';

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <MetaTags title="Register - My App" description="Create an account to get started." />
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <p>Registration form coming soon...</p>
      </div>
    </div>
  );
}

export default Register;