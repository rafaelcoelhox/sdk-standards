# Convenção de Commits

Este documento serve como referência completa para a convenção de commits usada nos SDKs da AbacatePay. Seguir estas diretrizes ajuda a manter um histórico de commits limpo, facilita a geração automática de changelogs e torna mais fácil entender o propósito de cada alteração.

## Formato Básico

Cada mensagem de commit consiste em um **cabeçalho**, um **corpo** e um **rodapé**. O cabeçalho tem um formato especial que inclui um **tipo**, um **escopo** opcional e uma **descrição**:
<tipo>[escopo opcional]: <descrição>
[corpo opcional]
[rodapé(s) opcional(is)]

O **cabeçalho** é obrigatório, mas **escopo**, **corpo** e **rodapé** são opcionais.

## Tipos Comuns de Commit

- `feat`: Nova funcionalidade adicionada ao código
- `fix`: Correção de bug no código
- `docs`: Alterações na documentação
- `style`: Formatação, ponto-e-vírgula ausente, etc. (sem alteração no código em si)
- `refactor`: Refatoração de código (sem alteração de funcionalidade)
- `test`: Adicionando testes ou corrigindo testes existentes
- `chore`: Alterações em processo de build, ferramentas, configurações, etc.
- `perf`: Melhorias de performance
- `ci`: Alterações em configurações de CI/CD
- `build`: Alterações que afetam o sistema de build ou dependências externas

## Escopo

O escopo deve ser o nome da parte do SDK afetada (por exemplo, api, auth, webhook, etc.).

## Descrição

A descrição deve ser uma frase curta que descreve a alteração:

- Use o imperativo, tempo presente: "adiciona", não "adicionado" nem "adicionando"
- Não inicie com letra maiúscula
- Não termine com ponto final

## Corpo

O corpo deve incluir a motivação para a alteração e contrastar com o comportamento anterior. Use o presente imperativo, como a descrição.

## Rodapé

O rodapé deve conter informações sobre **Breaking Changes** e também é o lugar para referenciar issues do GitHub que este commit fecha.

Breaking Changes devem começar com a palavra `BREAKING CHANGE:` seguida de um espaço ou quebra de linha. O resto da mensagem de commit descreve a alteração, justificativa e instruções de migração.

## Exemplos

### Commit simples
feat: adiciona método de validação de CPF

### Com escopo
feat(auth): adiciona suporte para autenticação OAuth2

### Com corpo e rodapé
fix(api): corrige tratamento de erros HTTP 500
Anteriormente, erros 500 causavam falha completa no cliente.
Agora eles são capturados e retentativas são feitas automaticamente.
Closes #123

### Breaking change
feat(api): redesenha interface de pagamentos
BREAKING CHANGE: A API de pagamentos foi redesenhada para melhorar a usabilidade.
Para migrar, substitua chamadas a payment.create() por payment.process()
e atualize o formato dos objetos de pagamento conforme a documentação.
Fixes #234

## Diretrizes Adicionais

1. **Commits atômicos**: Cada commit deve representar uma única alteração lógica. Não misture alterações não relacionadas em um único commit.

2. **Clareza acima de brevidade**: Se uma descrição mais longa ajudar a explicar o propósito do commit, use-a.

3. **Referencie issues**: Sempre referencie issues relacionadas no rodapé do commit, usando palavras-chave como `Fixes`, `Resolves` ou `Related to`.

4. **Não misture tipos**: Se você tem alterações de vários tipos (ex: uma nova funcionalidade e correção de documentação), considere fazer commits separados.

## Geração Automática de CHANGELOG

Seguir esta convenção de commits permite a geração automática de changelogs detalhados, usando ferramentas como o `standard-version` ou `conventional-changelog`.
