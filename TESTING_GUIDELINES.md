# Diretrizes de Testes

Este documento estabelece as diretrizes simplificadas para escrever e manter testes nos SDKs da AbacatePay.

## Princípios

1. **Foco no essencial**: Teste as funcionalidades críticas e APIs públicas
2. **Simplicidade**: Mantenha os testes simples e diretos
3. **Manutenibilidade**: Testes devem ser fáceis de entender e manter

## Tipos de Testes

Para os SDKs da AbacatePay, focamos principalmente em **testes unitários** e **verificação de código estático**:

### Testes Unitários

Testes unitários verificam o comportamento de funções e classes individuais.

**O que testar:**
- Métodos públicos da API do SDK
- Lógica de validação de entrada
- Tratamento de erros
- Transformações de dados

**O que não é necessário testar:**
- Código privado/interno (teste através da API pública)
- Implementações de bibliotecas de terceiros
- Código trivial (getters/setters simples)

### Testes de Linting

Verificações estáticas de código que garantem a consistência e qualidade do código:

- **Estilo de código**: Formatação, indentação, espaçamento
- **Boas práticas**: Evitar código duplicado, funções muito longas
- **Potenciais bugs**: Variáveis não utilizadas, condições que sempre retornam o mesmo valor
- **Consistência de tipos**: Verificação de tipos TypeScript

## Ferramentas

- **Jest**: Framework de teste principal
- **Nock**: Para simular chamadas HTTP
- **TypeScript**: Para tipagem estática
- **ESLint**: Para análise estática de código
- **Prettier**: Para formatação consistente

## Estrutura de Testes

Organize os testes em uma estrutura que espelhe o código-fonte:

```
src/
  resources/
    payments.ts
    customers.ts
tests/
  resources/
    payments.test.ts
    customers.test.ts
```

## Mocks e Stubs

Use mocks para isolar o código sendo testado:

```javascript
// Mock da resposta da API
const mockResponse = {
  id: 'pay_123',
  status: 'pending',
  amount: 1000
};

// Mock da chamada HTTP
nock('https://api.abacatepay.com')
  .post('/v1/payments')
  .reply(200, mockResponse);
```

## Exemplos de Testes

### Teste de Criação de Pagamento

```javascript
describe('PaymentsResource', () => {
  let client;
  
  beforeEach(() => {
    client = new AbacatePay({
      apiKey: 'test_key',
      environment: 'sandbox'
    });
  });
  
  it('should create a payment', async () => {
    // Arrange
    const paymentData = {
      amount: 1000,
      currency: 'BRL',
      description: 'Test payment'
    };
    
    nock('https://api.sandbox.abacatepay.com')
      .post('/v1/payments', paymentData)
      .reply(200, { id: 'pay_123', ...paymentData, status: 'pending' });
    
    // Act
    const payment = await client.payments.create(paymentData);
    
    // Assert
    expect(payment.id).toBe('pay_123');
    expect(payment.status).toBe('pending');
    expect(payment.amount).toBe(1000);
  });
});
```

### Teste de Tratamento de Erro

```javascript
it('should handle validation errors', async () => {
  // Arrange
  const invalidData = {
    amount: -100, // Valor inválido
    currency: 'BRL'
  };
  
  // Act & Assert
  await expect(
    client.payments.create(invalidData)
  ).rejects.toThrow(ValidationError);
});
```

## Configuração de Linting

Configure o ESLint e Prettier para garantir a qualidade do código:

```javascript
// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn'
  }
};
```

Execute a verificação de linting como parte do processo de teste:

```bash
# Verificar problemas de linting
npm run lint

# Corrigir problemas de linting automaticamente quando possível
npm run lint:fix
```

## Cobertura de Código

Mantenha uma cobertura de código razoável (>80%) para as funcionalidades principais do SDK. Não é necessário buscar 100% de cobertura, especialmente para código trivial.

## Execução de Testes

Execute os testes como parte do processo de desenvolvimento:

```bash
# Executar todos os testes
npm test

# Executar testes com cobertura
npm run test:coverage

# Executar linting
npm run lint
```

## Integração Contínua

Os testes unitários e verificações de linting são executados automaticamente em cada pull request e push para a branch principal através do GitHub Actions:

```yaml
# Exemplo de configuração no GitHub Actions
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run lint
      - run: npm test
```

## Conclusão

Estas diretrizes simplificadas focam no essencial para garantir a qualidade do SDK sem adicionar complexidade desnecessária. Para SDKs pequenos, os testes unitários bem escritos e verificações de linting são suficientes para garantir a confiabilidade e manutenibilidade do código.
