/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['192.168.1.72'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    })
    return config
  },
}
