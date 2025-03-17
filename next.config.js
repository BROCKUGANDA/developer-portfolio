const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to', 'media2.dev.to'],
    unoptimized: true
  },
  // Enable build caching
  experimental: {
    turbotrace: {
      logLevel: 'error'
    }
  },
  // Optimize for production
  swcMinify: true,
  reactStrictMode: true
}