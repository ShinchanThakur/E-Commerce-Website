/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI: "mongodb://localhost:27017/e-commerce-next",
        API_URL: "http://localhost:3000"
    }
};

export default nextConfig;
