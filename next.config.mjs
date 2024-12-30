/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/planner',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
