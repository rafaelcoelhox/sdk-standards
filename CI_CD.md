# Integração Contínua e Entrega Contínua (CI/CD)

Este documento descreve a configuração e os processos de CI/CD utilizados nos SDKs da AbacatePay.

## Princípios

Nossa abordagem de CI/CD segue estes princípios:

1. **Simplicidade**: Mantemos o pipeline o mais simples possível
2. **Confiabilidade**: Garantimos que o pipeline seja estável e previsível
3. **Velocidade**: Otimizamos para feedback rápido
4. **Segurança**: Incluímos verificações de segurança em cada etapa

## Pipeline de CI

Utilizamos GitHub Actions para nosso pipeline de CI, que consiste nas seguintes etapas:

### 1. Validação

```yaml
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Lint
        run: npm run lint
      - name: Type check
        run: npm run type-check
      - name: Test
        run: npm test
      - name: Build
        run: npm run build
```

### 2. Validação de Commits

```yaml
jobs:
  validate-commit-message:
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Validate commit messages
        uses: wagoid/commitlint-github-action@v5
```

### 3. Verificação de Segurança

```yaml
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      - name: Check for vulnerabilities
        run: npm audit --production
```

## Pipeline de CD

O processo de release é automatizado usando Changesets:

```yaml
jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    needs: [validate, security]
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Create Release Pull Request or Publish to npm
        id: changesets
        uses: changesets/action@v1
        with:
          publish: npm run release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Ambientes

Utilizamos os seguintes ambientes:

1. **CI**: Para validação de PRs e branches
2. **Staging**: Para testes pré-release (quando aplicável)
3. **Production**: Para publicação de pacotes

## Badges de Status

Incluímos badges no README.md para mostrar o status atual:

```markdown
![CI](https://github.com/AbacatePay/sdk/actions/workflows/ci.yml/badge.svg)
![Coverage](https://codecov.io/gh/AbacatePay/sdk/branch/main/graph/badge.svg)
![npm](https://img.shields.io/npm/v/@abacatepay/sdk)
```

## Configuração Local

Para desenvolvimento local, utilizamos:

- **Husky**: Para hooks de pré-commit e pré-push
- **lint-staged**: Para executar linters apenas nos arquivos alterados
- **commitlint**: Para validar mensagens de commit

## Monitoramento e Alertas

Configuramos alertas para:

- Falhas no pipeline de CI/CD
- Vulnerabilidades de segurança detectadas
- Falhas na publicação de pacotes

## Melhores Práticas

1. Mantenha os workflows de CI/CD sob controle de versão
2. Documente alterações significativas nos workflows
3. Teste alterações nos workflows em branches separadas
4. Mantenha os tempos de execução do CI abaixo de 5 minutos quando possível 