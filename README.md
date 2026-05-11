Teste:

1. 'npm install'
2. 'npm run dev'
3. enviar requisição curl pelo teminal

Ex:
# Envia uma requisição
curl -X POST http://localhost:3000/webhook -H "Content-Type: application/json" -d '{"id":12345,"mensagem":"hello world"}'

# listar mensagens
curl http://localhost:3000/mensagens

# testar um erro
curl -X POST http://localhost:3000/webhook -H "Content-Type: application/json" -d '{}'

