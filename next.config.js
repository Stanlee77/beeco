/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://vladislav2074:zTtwxtxheaAUCG20@cluster0.8phav4h.mongodb.net/products?retryWrites=true&w=majority",
    BASE_URI: "http://localhost:3000",
  },
};

module.exports = nextConfig;
