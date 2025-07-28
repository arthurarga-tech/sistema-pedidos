const express = require('express');
const cors = require('cors');
const db = require('./database/db');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Rota para salvar pedidos
app.post('/pedidos', (req, res) => {
  const { nome, itens } = req.body;

  if (!nome || !itens) {
    return res.status(400).json({ erro: 'Nome e itens são obrigatórios.' });
  }

  const query = `INSERT INTO pedidos (nome, itens) VALUES (?, ?)`;
  db.run(query, [nome, itens], function (err) {
    if (err) return res.status(500).json({ erro: err.message });

    res.json({
      id: this.lastID,
      nome,
      itens,
      status: 'pendente'
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
