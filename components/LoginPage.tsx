import React from 'react';

interface LoginPageProps {
  navigateToHome: () => void;
  navigateToRegister: () => void;
  navigateToDashboard?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ navigateToHome, navigateToRegister, navigateToDashboard }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-api-blue mb-4">Sign In / Register</h1>
        <p className="text-gray-600 mb-6">Welcome back! Please enter your details.</p>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigateToDashboard && navigateToDashboard(); }}>
          <div>
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-api-blue" />
          </div>
          <div>
            <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-api-blue" />
          </div>
          <button type="submit" className="w-full bg-api-blue text-white font-bold py-3 rounded-md hover:bg-api-blue-800 transition-colors duration-300">
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Don't have an account?{' '}
          <button onClick={navigateToRegister} className="font-semibold text-api-orange hover:underline">Register Now</button>
        </p>
      </div>
      <button 
        onClick={navigateToHome} 
        className="mt-8 text-api-blue hover:underline"
      >
        &larr; Back to Home
      </button>
    </div>
  );
};

export default LoginPage;
