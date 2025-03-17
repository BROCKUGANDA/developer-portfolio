const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to', 'media2.dev.to'],
    unoptimized: true
  },
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Configure proper caching
  onDemandEntries: {
    // Keep pages in memory for longer
    maxInactiveAge: 25 * 1000,
    // Have more pages loaded at once
    pagesBufferLength: 5
  }
}