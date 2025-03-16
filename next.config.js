const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to', 'media2.dev.to'],
    unoptimized: true
  },
  output: 'export',
  distDir: 'out',
  // Ensure that Next.js works well with Netlify
  trailingSlash: true
}