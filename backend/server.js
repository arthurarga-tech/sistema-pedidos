const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para permitir o uso de JSON
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
