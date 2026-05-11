const express = require('express');
const router = express.Router();
const { mensagens } = require('./store');


router.post('/webhook', (req, res) => {
  const { id, mensagem } = req.body;

  if (id === undefined || !mensagem) {
    return res.status(400).json({ erro: 'campos id e mensagem são obrigatórios' });
  }

  const registro = { id, mensagem, recebidoEm: new Date().toISOString() };
  mensagens.push(registro);
  
  return res.status(201).json({ sucesso: true, registro });

});


router.get('/mensagens', (req, res) => {
  return res.status(200).json({ total: mensagens.length, mensagens });

});

module.exports = router;