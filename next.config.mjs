/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/app',
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
