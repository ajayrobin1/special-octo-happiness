/** @type {import('next').NextConfig} */
const nextConfig = {
      webpack5: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
    config.resolve.fallback = { fs: false };

    return config;
  };
  },
       images: {
        domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;
