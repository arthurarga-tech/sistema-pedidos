const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho absoluto do banco
const dbPath = path.resolve(__dirname, 'pedidos.db');
const db = new sqlite3.Database(dbPath);

// Cria a tabela se não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS pedidos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      itens TEXT,
      status TEXT DEFAULT 'pendente'
    )
  `);
});

module.exports = db;
