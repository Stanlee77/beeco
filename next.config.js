/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: "mongodb+srv://vladislav2074:zTtwxtxheaAUCG20@cluster0.8phav4h.mongodb.net/products?retryWrites=true&w=majority"

  }
}

module.exports = nextConfig
