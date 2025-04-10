# Contribuindo com os SDKs da AbacatePay

Obrigado pelo interesse em contribuir com os SDKs da AbacatePay! Este documento descreve as diretrizes gerais para contribuir com qualquer um dos nossos SDKs.

## Código de Conduta

Todos os participantes em nossos projetos devem aderir ao nosso [Código de Conduta](./CODE_OF_CONDUCT.md). Por favor, leia-o para entender quais comportamentos serão e não serão tolerados.

## Canais de Comunicação

- **GitHub Issues**: Para bugs e solicitações de funcionalidades específicas
- **GitHub Discussions**: Para perguntas, ideias e discussões gerais
- **Email**: Para questões de segurança ou comunicações privadas: developers@abacatepay.com

## Como Contribuir

### Reportando Bugs

Bugs devem ser reportados através das issues do GitHub do repositório específico. Ao reportar um bug:

1. **Verifique issues existentes**: Pesquise nas issues abertas e fechadas para ver se o bug já foi reportado
2. **Use o template**: Use o template de bug report fornecido para garantir todas as informações necessárias
3. **Seja específico**: Inclua passos detalhados para reproduzir o problema
4. **Forneça contexto**: Especifique a versão do SDK, linguagem, ambiente e quaisquer outras informações relevantes
5. **Código de exemplo**: Se possível, forneça um pequeno código de exemplo que demonstre o problema

### Sugerindo Melhorias

Para sugerir melhorias:

1. **Use o template de feature request**: Isso garantirá que você forneça todas as informações necessárias
2. **Descreva o problema**: Explique claramente o problema que sua sugestão resolve
3. **Explique a solução**: Descreva como você imagina que a implementação da funcionalidade seria
4. **Explique os benefícios**: Como sua sugestão beneficiaria os usuários do SDK
5. **Considere alternativas**: Se houver abordagens alternativas, mencione-as

### Enviando Pull Requests

1. **Crie uma issue primeiro**: Sempre crie uma issue para discutir mudanças significativas antes de iniciar o trabalho
2. **Fork e clone**: Fork o repositório e clone-o localmente
3. **Crie uma branch**: Crie uma branch para sua feature ou correção (`git checkout -b feature/nova-funcionalidade`)
4. **Escreva testes**: Adicione ou modifique testes para a sua alteração
5. **Siga os padrões de código**: Siga o estilo de código do projeto
6. **Faça commits atômicos**: Faça commits pequenos e focados usando a [convenção de commits](#convenção-de-commits)
7. **Atualize a documentação**: Atualize os comentários no código, README e outros documentos conforme necessário
8. **Verifique CI**: Certifique-se de que todos os testes estão passando
9. **Envie o PR**: Abra um Pull Request com uma descrição clara do que foi feito

## Convenção de Commits

Utilizamos o padrão de [Conventional Commits](https://www.conventionalcommits.org/):

### Tipos Comuns de Commit

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Alterações em documentação
- `style`: Formatação de código (sem alteração no código em si)
- `refactor`: Refatoração de código (sem alteração de funcionalidade)
- `test`: Adicionando testes ou corrigindo testes existentes
- `chore`: Alterações em processo de build, ferramentas, etc.
- `perf`: Melhorias de performance
- `ci`: Alterações em configurações de CI
- `build`: Alterações no sistema de build ou dependências externas

### Exemplos

feat(auth): adiciona suporte para autenticação OAuth2
fix(pagamentos): corrige cálculo de taxa para valores fracionados
docs: atualiza exemplo de uso no README
test(webhooks): adiciona teste para validação de assinatura

## Estilo de Código

Cada SDK tem suas próprias convenções de estilo, específicas para cada linguagem. Consulte o README ou arquivo de contribuição do SDK específico para detalhes.

Princípios gerais:
- Código limpo e legível
- Comentários claros e úteis
- Nomear variáveis e funções de forma descritiva
- Manter funções pequenas e com única responsabilidade

## Processo de Revisão

1. Os mantenedores revisarão seu Pull Request em até 3 dias úteis
2. Feedback pode ser solicitado, seja para clarificação ou mudanças no código
3. Uma vez que todas as revisões estejam concluídas e aprovadas, um mantenedor mesclará seu PR
4. PRs serão mesclados usando "squash and merge" para manter o histórico limpo, a menos que haja um motivo para não fazer isso

## Após Seu PR Ser Mesclado

Depois que seu Pull Request for mesclado:
- Você será listado como contribuidor no repositório
- Sua alteração será incluída no próximo lançamento
- Você será mencionado no CHANGELOG.md

## Obrigado!

Suas contribuições tornam o ecossistema AbacatePay melhor para todos. Agradecemos seu tempo e esforço!