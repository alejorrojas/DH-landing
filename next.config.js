/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'br'],
    defaultLocale: 'es',
  },
  images: {
    domains: ["cloudflare-ipfs.com"]
  }

}

module.exports = nextConfig