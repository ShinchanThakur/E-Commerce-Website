/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI: "mongodb://localhost:27017/e-commerce-next"
    }
};

export default nextConfig;
