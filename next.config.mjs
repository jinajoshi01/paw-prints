/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Paw-prints-app/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/Paw-prints-app' : '',
    trailingSlash: true,
  };
  
  export default nextConfig;
  