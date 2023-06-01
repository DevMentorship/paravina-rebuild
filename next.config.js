const { Domain } = require('domain');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'res.cloudinary.com'],
  },
};

module.exports = {
  // ... other options
  cookieOptions: {
    sameSite: 'strict', // or 'strict' or 'lax'
    secure: true,
  },
};

module.exports = nextConfig;
