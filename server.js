import { createProxyMiddleware } from 'http-proxy-middleware';
const serve = require('serve');

const serveOptions = {
  port: process.env.PORT || 5000,
  // Outras opções do serve, se necessário
};

const proxyOptions = {
  target:  import.meta.env.VITE_API_URL, // Defina o destino do proxy (URL do servidor backend)
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove o prefixo '/api' na solicitação
  },
};

const app = serve(serveOptions);

app.use('/api', createProxyMiddleware(proxyOptions));

console.log(`Servidor rodando em http://localhost:${serveOptions.port}`);
