/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  },
  
}

module.exports = nextConfig


// async redirects() {
//   return [
//     {
//       source: '/',
//       destination: '/step1',
//       permanent: true,
//     },
    
//   ];
// },