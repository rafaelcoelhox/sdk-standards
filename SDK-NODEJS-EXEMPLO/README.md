# AbacatePay SDK para Node.js

SDK oficial da AbacatePay para integração com a API de pagamentos em aplicações Node.js.

[![npm version](https://img.shields.io/npm/v/@abacatepay/sdk.svg)](https://www.npmjs.com/package/@abacatepay/sdk)
[![Build Status](https://github.com/AbacatePay/sdk-nodejs/actions/workflows/ci.yml/badge.svg)](https://github.com/AbacatePay/sdk-nodejs/actions)
[![Coverage Status](https://codecov.io/gh/AbacatePay/sdk-nodejs/branch/main/graph/badge.svg)](https://codecov.io/gh/AbacatePay/sdk-nodejs)

## Instalação

```bash
npm install @abacatepay/sdk
# ou
yarn add @abacatepay/sdk
```

## Uso Rápido

```javascript
import { AbacatePay } from '@abacatepay/sdk';

// Inicialize o cliente
const client = new AbacatePay({
  apiKey: 'sua_chave_api',
  environment: 'sandbox' // ou 'production'
});

// Crie um pagamento
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

## Documentação

Para documentação completa, visite [docs.abacatepay.com/sdk/nodejs](https://docs.abacatepay.com/sdk/nodejs).

## Recursos

- Pagamentos
  - Criar, consultar, cancelar e reembolsar pagamentos
- Clientes
  - Gerenciar informações de clientes
- Assinaturas
  - Criar e gerenciar assinaturas recorrentes
- Webhooks
  - Receber notificações de eventos

## Requisitos

- Node.js 14 ou superior
- npm ou yarn

## Contribuição

Contribuições são bem-vindas! Por favor, leia nosso [guia de contribuição](CONTRIBUTING.md) antes de enviar pull requests.

## Segurança

Se você descobrir uma vulnerabilidade de segurança, por favor, siga nosso [processo de divulgação de segurança](SECURITY.md).

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). 