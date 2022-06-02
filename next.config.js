/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ghibliapi.herokuapp.com",
      "image.tmdb.org",
      "www.themoviedb.org",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
