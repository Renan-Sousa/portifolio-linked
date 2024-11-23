module.exports = {
  assetPrefix: './',
  basePath: '/nome-do-seu-repositorio',
  trailingSlash: true,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== habilita o export estático
  reactStrictMode: true,
};

module.exports = nextConfig;

