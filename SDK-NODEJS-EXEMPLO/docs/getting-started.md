# Começando com o SDK da AbacatePay

Este guia ajudará você a começar a usar o SDK da AbacatePay para Node.js.

## Instalação

Instale o pacote usando npm:

```bash
npm install @abacatepay/sdk
```

Ou usando yarn:

```bash
yarn add @abacatepay/sdk
```

## Configuração

Para começar, você precisará de uma chave de API da AbacatePay. Você pode obter uma no [Dashboard da AbacatePay](https://dashboard.abacatepay.com).

```javascript
const { AbacatePay } = require('@abacatepay/sdk');
// ou usando ES modules:
// import { AbacatePay } from '@abacatepay/sdk';

// Inicialize o cliente
const client = new AbacatePay({
  apiKey: 'sua_chave_api',
  environment: 'sandbox' // Use 'production' para ambiente de produção
});
```

## Exemplos de Uso

### Criar um Pagamento

```javascript
async function createPayment() {
  try {
    const payment = await client.payments.create({
      amount: 1000, // R$ 10,00
      currency: 'BRL',
      description: 'Compra de produto',
      customer: {
        name: 'João Silva',
        email: 'joao@exemplo.com',
        taxId: '123.456.789-00' // CPF
      }
    });
    
    console.log('Pagamento criado:', payment.id);
    return payment;
  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
  }
}
```

### Consultar um Pagamento

```javascript
async function getPayment(paymentId) {
  try {
    const payment = await client.payments.get(paymentId);
    console.log('Status do pagamento:', payment.status);
    return payment;
  } catch (error) {
    console.error('Erro ao consultar pagamento:', error);
  }
}
```

## Tratamento de Erros

O SDK lança diferentes tipos de erros que você pode capturar e tratar:

```javascript
try {
  // Código que usa o SDK
} catch (error) {
  if (error.name === 'ValidationError') {
    console.error('Erro de validação:', error.errors);
  } else if (error.name === 'AuthenticationError') {
    console.error('Erro de autenticação. Verifique sua chave de API.');
  } else if (error.name === 'ApiError') {
    console.error(`Erro da API (${error.statusCode}):`, error.message);
  } else {
    console.error('Erro inesperado:', error);
  }
}
```

## Próximos Passos

- Explore a [documentação completa da API](https://docs.abacatepay.com/api)
- Veja [exemplos mais avançados](https://github.com/AbacatePay/sdk-nodejs/tree/main/examples)
- Aprenda sobre [webhooks](./webhooks.md) para receber notificações de eventos 