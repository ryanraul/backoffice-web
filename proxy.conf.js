const PROXY_CONFIG = [
   {
      context: ['/ws'],
      target: "https://viacep.com.br/",
      secure: true,
      changeOrigin: true,
      logLevel: "debug"
   }
]

module.exports = PROXY_CONFIG;

