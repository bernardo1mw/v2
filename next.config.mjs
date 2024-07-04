/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",  // <=== enables static exports
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},

};

export default nextConfig;
