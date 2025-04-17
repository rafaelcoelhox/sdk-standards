### 2. Criando CONTRIBUTING.md

Agora, vamos criar um arquivo de contribuição padronizado:

```markdown
# Guia de Contribuição

Obrigado pelo interesse em contribuir para o SDK do AbacatePay! Este documento contém as diretrizes que você deve seguir para contribuir de maneira eficaz.

## Código de Conduta

Este projeto segue o [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar, você concorda em manter este código.

## Fluxo de Trabalho de Desenvolvimento

1. Faça um fork do repositório
2. Clone seu fork: `git clone https://github.com/seu-usuario/abacatepay-[linguagem]-sdk.git`
3. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`
4. Faça suas alterações seguindo as convenções de código
5. Execute os testes: `[comando específico da linguagem]`
6. Commit suas alterações usando [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat: adiciona nova funcionalidade`
   - `fix: corrige um bug`
   - `docs: atualiza documentação`
   - `style: formatação de código`
   - `refactor: refatoração de código sem mudança funcional`
   - `test: adiciona ou corrige testes`
   - `chore: ajustes em tarefas de build, configurações, etc.`
7. Envie para seu fork: `git push origin feature/nome-da-feature`
8. Abra um Pull Request para a branch principal

## Padrões de Código

- Siga o estilo de código definido nos arquivos de configuração do linter
- Escreva testes para todas as novas funcionalidades
- Mantenha a documentação atualizada
- Mantenha a cobertura de testes em pelo menos 80%

## Processo de Revisão de Pull Request

- Pelo menos um mantenedor deve aprovar as mudanças
- Todos os testes automatizados devem passar
- O código deve seguir os padrões estabelecidos

## Lançamentos

Usamos versionamento semântico (SemVer) e geramos changelogs automaticamente a partir dos commits.
