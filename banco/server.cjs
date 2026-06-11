import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Ativa o modo detalhado (verbose) do SQLite no formato de módulos
const sqlite3Verbose = sqlite3.verbose();

// 1. Conecta ao arquivo banco.db local
const db = new sqlite3Verbose.Database('./banco.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        criarTabelas();
    }
});

// 2. Cria a tabela se não existir
function criarTabelas() {
    db.run(`
        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            preco REAL NOT NULL,
            descricao TEXT,
            imagem TEXT
        )
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela:', err.message);
        } else {
            console.log('Tabela "produtos" pronta para uso.');
            alimentarBancoSeVazio();
        }
    });
}

// 3. Alimenta o banco com os seus doces se estiver vazio
function alimentarBancoSeVazio() {
    db.get('SELECT COUNT(*) AS total FROM produtos', [], (err, row) => {
        if (err) {
            console.error(err.message);
            iniciarServidor();
            return;
        }

        if (row && row.total === 0) {
            console.log('Alimentando o banco de dados com os produtos iniciais...');
            
            // Corrigido de 'description' para 'descricao' para bater com o banco
            const listaInicial = [
                { nome: 'Brigadeiro Gourmet', preco: 4.50, descricao: 'Clássico cremoso com chocolate nobre e finalização delicada.', imagem: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=900&q=80' },
                { nome: 'Beijinho Especial', preco: 4.50, descricao: 'Doçura equilibrada com coco fresco e toque artesanal.', imagem: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80' },
                { nome: 'Brownie com Nutella', preco: 12.90, descricao: 'Massa intensa de chocolate com centro macio e cobertura generosa.', imagem: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80' },
                { nome: 'Torta de Morango', preco: 18.90, descricao: 'Creme suave, morangos frescos e acabamento refinado.', imagem: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=900&q=80' },
                { nome: 'Cheesecake de Frutas Vermelhas', preco: 19.90, descricao: 'Textura aveludada com calda de frutas vermelhas selecionadas.', imagem: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80' },
                { nome: 'Bolo Red Velvet', preco: 15.90, descricao: 'Massa macia, recheio delicado e visual sofisticado.', imagem: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=900&q=80' },
                { nome: 'Bolo de Chocolate Belga', preco: 16.90, descricao: 'Camadas intensas com chocolate encorpado e acabamento premium.', imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80' },
                { nome: 'Cupcake de Baunilha', preco: 8.90, descricao: 'Leve, aromático e finalizado com creme amanteigado.', imagem: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80' },
                { nome: 'Pudim Artesanal', preco: 10.90, descricao: 'Receita tradicional com calda brilhante e textura impecável.', imagem: 'https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&w=900&q=80' },
                { nome: 'Banoffee Premium', preco: 17.90, descricao: 'Base crocante, doce de leite cremoso e banana fresca.', imagem: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=900&q=80' }
            ];

            const stmt = db.prepare(`INSERT INTO produtos (nome, preco, descricao, imagem) VALUES (?, ?, ?, ?)`);
            listaInicial.forEach((p) => {
                stmt.run(p.nome, p.preco, p.descricao, p.imagem);
            });
            stmt.