/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://moveboks.dk/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
