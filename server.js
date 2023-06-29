import { createProxyMiddleware } from 'http-proxy-middleware';
import { exec } from 'child_process';

const serveCommand = 'serve dist -s -n -L -p 5000'; // Comando para iniciar o servidor serve

exec(serveCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao iniciar o servidor serve: ${error}`);
    return;
  }
  console.log(`Servidor serve iniciado com sucesso.`);
});

const serveOptions = {
  port: process.env.PORT || 5000,
  // Outras opções do serve, se necessário
};

const proxyOptions = {
  target: import.meta.env.VITE_API_URL, // Defina o destino do proxy (URL do servidor backend)
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove o prefixo '/api' na solicitação
  },
};

const app = serve(serveOptions);

app.use('/api', createProxyMiddleware(proxyOptions));

console.log(`Servidor rodando em http://localhost:${serveOptions.port}`);

