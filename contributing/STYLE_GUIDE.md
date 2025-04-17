# Guia de Estilo

Este documento define o guia de estilo para o código dos SDKs da AbacatePay.

## Princípios Gerais

1. **Consistência**: Mantenha o estilo consistente em todo o código
2. **Legibilidade**: Priorize código legível sobre código conciso
3. **Simplicidade**: Evite soluções complexas quando soluções simples funcionarem
4. **Manutenibilidade**: Escreva código pensando em quem vai mantê-lo

## Formatação

Utilizamos ESLint e Prettier para garantir a formatação consistente do código.

### Indentação e Espaçamento

- Use 2 espaços para indentação
- Não use tabs
- Evite linhas com mais de 100 caracteres
- Use espaço após vírgulas e em torno de operadores

```javascript
// Correto
function example(param1, param2) {
  const result = param1 + param2;
  return result;
}

// Incorreto
function example(param1,param2){
const result=param1+param2;
return result;
}
```

### Chaves e Parênteses

- Abra chaves na mesma linha da declaração
- Sempre use chaves para blocos, mesmo que tenham apenas uma linha
- Adicione espaços dentro de parênteses apenas quando melhorar a legibilidade

```javascript
// Correto
if (condition) {
  doSomething();
}

// Incorreto
if (condition)
  doSomething();
```

## Nomenclatura

### Variáveis e Funções

- Use camelCase para variáveis e funções
- Nomes devem ser descritivos e indicar o propósito
- Evite abreviações não óbvias

```javascript
// Correto
const customerName = 'John';
function calculateTotalAmount() { /* ... */ }

// Incorreto
const custNm = 'John';
function calcTot() { /* ... */ }
```

### Classes e Interfaces

- Use PascalCase para classes e interfaces
- Nomes de classes devem ser substantivos
- Interfaces em TypeScript podem ter prefixo "I" (opcional)

```javascript
// Correto
class BillingService { /* ... */ }
interface CustomerData { /* ... */ }

// Incorreto
class billing_service { /* ... */ }
```

### Constantes

- Use UPPER_SNAKE_CASE para constantes que representam valores fixos
- Constantes de configuração devem ser agrupadas em objetos

```javascript
// Correto
const DEFAULT_TIMEOUT = 30000;
const Config = {
  API_URL: 'https://api.abacatepay.com',
  VERSION: 'v1'
};

// Incorreto
const defaultTimeout = 30000;
```

## Estrutura de Código

### Importações

- Organize importações em grupos: bibliotecas externas, depois internas
- Ordene alfabeticamente dentro de cada grupo
- Use importações nomeadas em vez de namespace imports

```javascript
// Correto
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { ApiError } from './errors';
import { validatePayment } from './validators';

// Incorreto
import * as validators from './validators';
import { ApiError } from './errors';
import axios from 'axios';
```

### Exportações

- Prefira exportações nomeadas para melhor refatoração
- Use exportação default apenas para a classe/função principal de um arquivo

```javascript
// Correto
export class Customer { /* ... */ }
export function validateCustomer() { /* ... */ }

// Em index.ts
export { default as Billing } from './billing';
export { default as Customer } from './customer';
```

## TypeScript

### Tipos

- Defina tipos explícitos para parâmetros de funções e retornos
- Use interfaces para objetos complexos
- Evite `any` sempre que possível

```typescript
// Correto
interface CustomerData {
  name: string;
  email: string;
  taxId?: string;
}

function createCustomer(data: CustomerData): Promise<Customer> {
  // ...
}

// Incorreto
function createCustomer(data: any): any {
  // ...
}
```

### Generics

- Use generics para criar componentes reutilizáveis com segurança de tipos
- Nomeie parâmetros de tipo de forma significativa (T, U, V para simples; mais descritivos para complexos)

```typescript
// Correto
function getFirst<T>(array: T[]): T | undefined {
  return array[0];
}

// Para casos mais complexos
interface Repository<TEntity extends BaseEntity> {
  findById(id: string): Promise<TEntity>;
}
```

## Comentários

- Use comentários para explicar "por quê", não "o quê" ou "como"
- Use JSDoc para documentar APIs públicas
- Mantenha comentários atualizados com o código

```javascript
/**
 * Cria uma nova cobrança no sistema.
 * 
 * @param {BillingData} data - Dados da cobrança
 * @returns {Promise<Billing>} A cobrança criada
 * @throws {ValidationError} Se os dados forem inválidos
 */
async function createBilling(data) {
  // Validação especial para cobranças recorrentes
  if (data.frequency !== 'ONE_TIME') {
    validateRecurringBilling(data);
  }
  
  return api.post('/billings', data);
}
```

## Tratamento de Erros

- Use try/catch para capturar e tratar erros
- Crie classes de erro personalizadas para diferentes tipos de erro
- Sempre inclua informações úteis nas mensagens de erro

```javascript
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  // Transforme em um erro mais específico com contexto
  if (error.response && error.response.status === 404) {
    throw new ResourceNotFoundError('O recurso solicitado não foi encontrado', {
      originalError: error,
      resourceId: id
    });
  }
  throw error;
}
```

## Assincronicidade

- Prefira async/await sobre Promises encadeadas
- Trate erros com try/catch em vez de .catch()
- Evite callbacks aninhados

```javascript
// Correto
async function processPayment(paymentId) {
  try {
    const payment = await getPayment(paymentId);
    const result = await processPaymentData(payment);
    return result;
  } catch (error) {
    handlePaymentError(error);
  }
}

// Evite
function processPayment(paymentId) {
  return getPayment(paymentId)
    .then(payment => {
      return processPaymentData(payment);
    })
    .catch(error => {
      handlePaymentError(error);
    });
}
```

## Verificação de Estilo

Execute regularmente as verificações de estilo:

```bash
# Verificar estilo
npm run lint

# Corrigir problemas automaticamente
npm run lint:fix
```

## Ferramentas de Estilo

Configuramos as seguintes ferramentas para manter a consistência:

- **ESLint**: Para regras de estilo e boas práticas
- **Prettier**: Para formatação consistente
- **TypeScript**: Para verificação de tipos
- **Husky + lint-staged**: Para verificar o estilo antes de commits 