/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://nodecafe.co/:path*",
        permanent: true, // This indicates a 301 redirect
      },
    ];
  },
};

export default nextConfig;
