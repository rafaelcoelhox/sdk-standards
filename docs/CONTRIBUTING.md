# Guia de Contribuição

Obrigado pelo interesse em contribuir para os SDKs da AbacatePay! Este documento contém as diretrizes que você deve seguir para contribuir de maneira eficaz.

## Código de Conduta

Este projeto segue o [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar, você concorda em manter este código.

## Fluxo de Trabalho de Desenvolvimento

1. Faça um fork do repositório
2. Clone seu fork: `git clone https://github.com/seu-usuario/abacatepay-sdk.git`
3. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`
4. Faça suas alterações seguindo as convenções de código
5. Execute os testes: `npm test`
6. Defina as mudanças para o changelog: `npm run define:change`
7. Commit suas alterações usando [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
8. Envie para seu fork: `git push origin feature/nome-da-feature`
9. Abra um Pull Request para a branch principal

## Padrões de Código

- Siga o estilo de código definido no arquivo .eslintrc e .prettierrc
- Escreva testes para todas as novas funcionalidades
- Mantenha a documentação atualizada
- Garanta tipos TypeScript adequados para todas as APIs

## Estilo de Código

Este projeto utiliza ESLint e Prettier para garantir a consistência do código. Execute os seguintes comandos:

```bash
# Verificar estilo de código
npm run lint

# Corrigir problemas de estilo automaticamente
npm run lint:fix
```

## Testes

Todos os novos recursos devem incluir testes. Execute a suite de testes:

```bash
npm test
```

## Cobertura de Código

Mantenha a cobertura de testes em pelo menos 80%:

```bash
npm run test:coverage
```

## Gerenciamento de Versões

Este projeto usa Changesets para gerenciar versões e changelogs:

1. Depois de fazer suas alterações, execute: `npm run define:change`
2. Siga as instruções para documentar suas alterações
3. Isso criará um arquivo na pasta `.changeset/`
4. Commit este arquivo junto com suas mudanças

## Processo de Revisão de Pull Request

- Pelo menos um mantenedor deve aprovar as mudanças
- Todos os testes automatizados devem passar
- O código deve seguir os padrões estabelecidos

## Mensagens de Commit

Seguimos a convenção Conventional Commits para mensagens de commit:

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Alterações na documentação
- `style`: Formatação, ponto-e-vírgula ausente, etc.
- `refactor`: Refatoração de código
- `test`: Adicionando testes ou corrigindo testes existentes
- `chore`: Alterações no processo de build, ferramentas, etc.

Exemplo: `feat(billing): adiciona suporte para múltiplos pagamentos`

## Perguntas?

Se você tiver dúvidas sobre como contribuir, abra uma issue com o template de questão ou entre em contato com os mantenedores.

Obrigado por contribuir para o AbacatePay!