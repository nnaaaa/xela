/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    output: 'standalone',
    env: {
        API_SERVER: process.env.API_SERVER,
        SUBSCRIPTION_SERVER: process.env.SUBSCRIPTION_SERVER,
    },
};

export default nextConfig;
