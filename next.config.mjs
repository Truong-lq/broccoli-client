/** @type {import('next').NextConfig} */
const nextConfig = {
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
