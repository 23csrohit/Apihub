import React from 'react';

interface RegisterPageProps {
	navigateToHome: () => void;
	navigateToLogin: () => void;
	navigateToDashboard?: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ navigateToHome, navigateToLogin, navigateToDashboard }) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="p-8 bg-white rounded-lg shadow-xl w-full max-w-md text-center">
				<h1 className="text-3xl font-bold text-api-blue mb-4">Create Account</h1>
				<p className="text-gray-600 mb-6">Join API Hub in a few quick steps.</p>

				<form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigateToDashboard && navigateToDashboard(); }}>
					<div>
						<input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-api-blue" />
					</div>
					<div>
						<input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-api-blue" />
					</div>
					<div>
						<input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-api-blue" />
					</div>
					<div>
						<input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-api-blue" />
					</div>
					<button type="submit" className="w-full bg-api-orange text-white font-bold py-3 rounded-md hover:bg-api-blue-800 transition-colors duration-300">
						Register
					</button>
				</form>

				<p className="mt-6 text-sm text-gray-500">
					Already have an account?{' '}
					<button onClick={navigateToLogin} className="font-semibold text-api-blue hover:underline">Sign In</button>
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

export default RegisterPage;

