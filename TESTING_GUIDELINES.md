# Diretrizes de Testes

Este documento estabelece as diretrizes para escrever e manter testes nos SDKs da AbacatePay.

## Princípios

1. **Cobertura abrangente**: Teste todas as funcionalidades públicas
2. **Isolamento**: Testes devem ser independentes uns dos outros
3. **Determinismo**: Testes devem produzir os mesmos resultados em cada execução
4. **Velocidade**: A suite de testes deve executar rapidamente
5. **Manutenibilidade**: Testes devem ser fáceis de entender e manter

## Tipos de Testes

### Testes Unitários

Testam unidades individuais de código (funções, métodos, classes) isoladamente.

```javascript
// Exemplo de teste unitário
describe('Validator', () => {
  describe('validateCPF', () => {
    it('should return true for valid CPF', () => {
      expect(Validator.validateCPF('123.456.789-09')).toBe(true);
    });

    it('should return false for invalid CPF', () => {
      expect(Validator.validateCPF('111.111.111-11')).toBe(false);
    });
  });
});
```

### Testes de Integração

Testam a interação entre diferentes partes do sistema.

```javascript
// Exemplo de teste de integração
describe('BillingClient', () => {
  it('should create a billing and retrieve it', async () => {
    const client = new AbacatePay('test_api_key');
    
    // Criar cobrança
    const billing = await client.billing.create({
      amount: 1000,
      description: 'Test billing'
    });
    
    // Recuperar a cobrança criada
    const retrieved = await client.billing.get(billing.id);
    
    expect(retrieved.id).toBe(billing.id);
    expect(retrieved.amount).toBe(1000);
  });
});
```

### Testes de API

Testam a interação com a API externa, geralmente usando mocks.

```javascript
// Exemplo de teste de API com mocks
describe('API Client', () => {
  beforeEach(() => {
    nock('https://api.abacatepay.com')
      .post('/v1/billings')
      .reply(200, { id: 'bill_123', status: 'pending' });
  });

  it('should make API request correctly', async () => {
    const client = new AbacatePay('test_api_key');
    const result = await client.billing.create({ amount: 1000 });
    
    expect(result.id).toBe('bill_123');
  });
});
```

## Ferramentas

Utilizamos as seguintes ferramentas para testes:

- **Jest**: Framework principal de testes
- **nock**: Para mockar requisições HTTP
- **sinon**: Para stubs e mocks de funções
- **faker**: Para geração de dados de teste

## Organização dos Testes

Organize os testes seguindo a estrutura do código:

```
src/
  billing/
    billing.ts
    billing.test.ts
  customer/
    customer.ts
    customer.test.ts
```

## Mocks e Fixtures

### Dados de Teste

Mantenha dados de teste em arquivos separados:

```javascript
// fixtures/billings.js
export const validBilling = {
  id: 'bill_123',
  amount: 1000,
  status: 'pending',
  created_at: '2023-01-01T00:00:00Z'
};
```

### Mocks de API

Use nock para mockar respostas da API:

```javascript
import nock from 'nock';

// Configure mock antes dos testes
beforeEach(() => {
  nock('https://api.abacatepay.com')
    .get('/v1/billings/bill_123')
    .reply(200, validBilling);
});

// Limpe mocks após os testes
afterEach(() => {
  nock.cleanAll();
});
```

## Cobertura de Código

Mantemos uma cobertura mínima de 80% para todos os SDKs:

```bash
npm run test:coverage
```

Áreas críticas como validação, autenticação e manipulação de erros devem ter cobertura de 100%.

## Testes de Regressão

Antes de cada release, execute a suite completa de testes para garantir que não haja regressões:

```bash
npm run test:all
```

## Testes de Integração Contínua

Todos os testes são executados automaticamente em cada PR e push para a branch principal através do GitHub Actions.

## Boas Práticas

1. **Um assert por teste**: Mantenha os testes focados em verificar uma única coisa
2. **Nomes descritivos**: Use nomes que descrevam o comportamento esperado
3. **Arrange-Act-Assert**: Estruture seus testes neste padrão
4. **Evite lógica complexa**: Testes devem ser simples e diretos
5. **Teste casos de erro**: Não teste apenas o caminho feliz

## Exemplos

### Teste de Sucesso

```javascript
it('should create a customer successfully', async () => {
  // Arrange
  const client = new AbacatePay('test_api_key');
  const customerData = {
    name: 'John Doe',
    email: 'john@example.com',
    taxId: '123.456.789-09'
  };
  
  // Act
  const customer = await client.customer.create(customerData);
  
  // Assert
  expect(customer).toHaveProperty('id');
  expect(customer.name).toBe(customerData.name);
});
```

### Teste de Erro

```javascript
it('should throw ValidationError for invalid data', async () => {
  // Arrange
  const client = new AbacatePay('test_api_key');
  const invalidData = {
    name: '', // Nome vazio, inválido
    email: 'invalid-email'
  };
  
  // Act & Assert
  await expect(
    client.customer.create(invalidData)
  ).rejects.toThrow(ValidationError);
}); 