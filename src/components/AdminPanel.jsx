import React, { useState } from 'react';

export function AdminPanel() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();

    // Monta o objeto exatamente como a tabela do SQLite espera
    const novoDoce = {
      nome,
      preco: parseFloat(preco),
      descricao,
      imagem: imagem || 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80' // Imagem padrão caso fique vazia
    };

    // Dispara a requisição POST para salvar no banco físico
    fetch('http://localhost:3001/api/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoDoce)
    })
      .then((res) => {
        if (res.ok) {
          setMensagem('🎉 Doce cadastrado com sucesso! Atualize a página para ver no cardápio.');
          // Limpa o formulário
          setNome('');
          setPreco('');
          setDescricao('');
          setImagem('');
        } else {
          setMensagem('❌ Erro ao cadastrar o produto.');
        }
      })
      .catch((err) => {
        console.error(err);
        setMensagem('❌ Erro ao conectar com o servidor.');
      });
  };

  return (
    <section className="section" id="admin" style={{ backgroundColor: '#fcf8f9', borderTop: '2px dashed #e066a2', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="section-heading" style={{ marginBottom: '30px', textAlign: 'center' }}>
          <span className="eyebrow">Gerenciamento</span>
          <h2>Painel do Confeiteiro</h2>
          <p>Cadastre novos doces artesanais direto no banco de dados SQLite.</p>
        </div>

        <form onSubmit={handleCadastro} style={{ display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Nome do Doce:</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ex: Bolo de Pote Ninho com Nutella" />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Preço (R$):</label>
            <input type="number" step="0.01" value={preco} onChange={(e) => setPreco(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="Ex: 12.50" />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Descrição dos Ingredientes:</label>
            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', height: '80px' }} placeholder="Descreva o acabamento e sabores..." />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Link da Foto (URL):</label>
            <input type="url" value={imagem} onChange={(e) => setImagem(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} placeholder="https://link-da-imagem.com/foto.jpg" />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', marginTop: '10px', fontWeight: 'bold' }}>
            💾 Cadastrar no Cardápio
          </button>

          {mensagem && <p style={{ marginTop: '15px', textAlign: 'center', fontWeight: 'bold', color: mensagem.includes('🎉') ? '#25D366' : '#ff4d4d' }}>{mensagem}</p>}
        </form>
      </div>
    </section>
  );
}