/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",  // <=== enables static exports
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
	images: { unoptimized: true }

};

export default nextConfig;
