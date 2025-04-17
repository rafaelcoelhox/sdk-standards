# AbacatePay Node.js SDK

SDK oficial para integração com a plataforma AbacatePay em Node.js/JavaScript.

[![Versão atual](https://img.shields.io/npm/v/abacatepay-nodejs-sdk)](https://www.npmjs.com/package/abacatepay-nodejs-sdk)
[![Build Status](https://github.com/AbacatePay/abacatepay-nodejs-sdk/workflows/CI/badge.svg)](https://github.com/AbacatePay/abacatepay-nodejs-sdk/actions)
[![Licença](https://img.shields.io/badge/licença-MIT-green.svg)](LICENSE)

## Instalação

```bash
npm install abacatepay-nodejs-sdk
```

## Uso Rápido

```javascript
import AbacatePay from 'abacatepay-nodejs-sdk';

// Inicialize o SDK com sua API key
const abacate = AbacatePay('your_api_key');

// Criar um pagamento
const billing = await abacate.billing.create({
  frequency: "ONE_TIME",
  methods: ["PIX"],
  products: [
    {
      externalId: "PRO-PLAN",
      name: "Pro plan",
      quantity: 1,
      price: 1000 // Valor em centavos
    }
  ],
  returnUrl: "https://seusite.com/app",
  completionUrl: "https://seusite.com/pagamento/sucesso",
  customer: {
    email: 'cliente@exemplo.com'
  }
});

console.log(billing.url); // URL de pagamento para seu cliente
```

## Funcionalidades

- Billing: Criação e gerenciamento de cobranças
- Customers: Gerenciamento de clientes
- Coupons: Criação e gestão de cupons de desconto
- Suporte completo a PIX: Pagamentos instantâneos brasileiros
- TypeScript: Tipos completos para melhor experiência de desenvolvimento

## Documentação Detalhada

### Autenticação

```javascript
import AbacatePay from 'abacatepay-nodejs-sdk';

// Inicialize o SDK com sua API key
const abacate = AbacatePay('your_api_key');
```

### Criando uma Cobrança

```javascript
const billing = await abacate.billing.create({
  frequency: "ONE_TIME",
  methods: ["PIX"],
  products: [
    {
      externalId: "123",
      name: "Produto de Teste",
      quantity: 1,
      price: 1000,
      description: "Descrição do produto"
    }
  ],
  returnUrl: "https://seusite.com/retorno",
  completionUrl: "https://seusite.com/conclusao",
  customer: {
    name: "Nome do Cliente",
    cellphone: "(11) 99999-9999",
    email: "cliente@exemplo.com",
    taxId: "123.456.789-10"
  }
});
```

### Listando Cobranças

```javascript
const billings = await abacate.billing.list();
for (const billing of billings) {
  console.log(billing.id, billing.status);
}
```

### Gerenciando Clientes

```javascript
// Criar um cliente
const customer = await abacate.customer.create({
  name: "Nome do Cliente",
  cellphone: "(11) 99999-9999",
  email: "cliente@exemplo.com",
  taxId: "123.456.789-10"
});

// Listar clientes
const customers = await abacate.customer.list();
```

### Criando Cupons de Desconto

```javascript
const coupon = await abacate.coupon.create({
  code: "PROMO10",
  discountKind: "PERCENTAGE",
  discount: 10,
  maxRedeems: 100
});
```

## Requisitos

- Node.js 14.x ou superior
- npm ou yarn

## Configuração para Ambiente de Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/AbacatePay/abacatepay-nodejs-sdk.git
cd abacatepay-nodejs-sdk

# Instale as dependências
npm install

# Execute os testes
npm test
```

## Contribuindo

Contribuições são bem-vindas! Por favor, leia nosso [guia de contribuição](https://github.com/rafaelcoelhox/sdk-standards/blob/main/CONTRIBUTING.md) antes de enviar pull requests.

## Segurança

Se você descobrir uma vulnerabilidade de segurança, por favor envie um email para ajuda@abacatepay.com ao invés de abrir uma issue pública. Mais detalhes em nossa [política de segurança](https://github.com/rafaelcoelhox/sdk-standards/blob/main/SECURITY.md).

## Documentação Adicional

- [Processo de Release](https://github.com/rafaelcoelhox/sdk-standards/blob/main/RELEASE_PROCESS.md)
- [Guia de Estilo](https://github.com/rafaelcoelhox/sdk-standards/blob/main/STYLE_GUIDE.md)
- [Diretrizes de Testes](https://github.com/rafaelcoelhox/sdk-standards/blob/main/TESTING_GUIDELINES.md)
- [Convenção de Commits](https://github.com/rafaelcoelhox/sdk-standards/blob/main/COMMIT_CONVENTION.md)
- [Gerenciamento de Dependências](https://github.com/rafaelcoelhox/sdk-standards/blob/main/DEPENDENCY_MANAGEMENT.md)
- [CI/CD](https://github.com/rafaelcoelhox/sdk-standards/blob/main/CI_CD.md)
- [Roadmap](https://github.com/rafaelcoelhox/sdk-standards/blob/main/ROADMAP.md)
- [Código de Conduta](https://github.com/rafaelcoelhox/sdk-standards/blob/main/CODE_OF_CONDUCT.md)

## Suporte

- Documentação oficial: https://docs.abacatepay.com
- GitHub Issues: Para bugs e solicitações de funcionalidades
- Email: ajuda@abacatepay.com

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.