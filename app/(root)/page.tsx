import React from 'react';

const Home = () => {
	return (
		<div className="bg-gray-100">
			<div className="min-h-screen flex items-center justify-center">
				<div className="max-w-2xl w-full px-4">
					<h1 className="text-4xl font-bold text-center mb-8">
						earthtomemphis Travel Website is Coming Soon!
					</h1>
					<p className="text-lg text-gray-600 text-center mb-12">
						I'm currently building the best travel website out there
						and will notify you when it goes live!!
					</p>
					<form className="flex flex-col md:flex-row justify-center items-center gap-4">
						<input
							className="w-full md:w-80  py-2 px-4 border text-gray-800 border-gray-200 bg-white"
							type="email"
							placeholder="Enter your email address"
						/>
						<button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border">
							Notify Me
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
