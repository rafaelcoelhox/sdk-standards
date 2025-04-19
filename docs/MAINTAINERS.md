# Guia para Mantenedores

Este documento é destinado aos mantenedores oficiais dos SDKs da AbacatePay. Ele contém orientações, procedimentos e melhores práticas para manter e gerenciar eficazmente os repositórios de SDKs.

## Responsabilidades dos Mantenedores

Como mantenedor de um SDK da AbacatePay, você é responsável por:

1. **Revisão de Código**
   - Revisar Pull Requests em tempo hábil (meta: dentro de 3 dias úteis)
   - Garantir que o código contribuído atenda aos padrões de qualidade
   - Verificar se os testes apropriados foram incluídos

2. **Gestão de Issues**
   - Triar issues recebidas
   - Marcar issues com as etiquetas apropriadas
   - Responder a dúvidas e pedidos de esclarecimento
   - Fechar issues que não são mais relevantes

3. **Lançamentos**
   - Planejar e executar lançamentos de acordo com a política de versionamento
   - Manter o CHANGELOG atualizado
   - Publicar pacotes nos registros relevantes

4. **Documentação**
   - Manter a documentação atualizada
   - Garantir que exemplos de código funcionem corretamente
   - Documentar novos recursos

5. **Qualidade de Código**
   - Manter a cobertura de testes alta
   - Garantir que o código siga as diretrizes de estilo
   - Monitorar e resolver problemas de segurança

## Fluxo de Trabalho para Revisão de Pull Requests

Siga estas etapas ao revisar PRs:

1. **Verificação Inicial**
   - A PR está relacionada a uma issue? Se não, peça ao contribuidor que crie uma
   - Os testes estão passando?
   - O código segue as diretrizes de estilo?

2. **Revisão Técnica**
   - O código faz o que se propõe a fazer?
   - Há casos extremos não tratados?
   - Existem possíveis problemas de desempenho ou segurança?
   - A implementação é consistente com o restante do SDK?

3. **Verificação de Documentação**
   - As alterações estão documentadas adequadamente?
   - Os exemplos de código foram atualizados?
   - Há um changeset descrevendo as alterações?

4. **Feedback**
   - Forneça feedback construtivo e específico
   - Explique o "porquê" por trás das sugestões
   - Reconheça os aspectos positivos da contribuição

5. **Aprovação e Merge**
   - Aprove a PR quando todas as questões forem resolvidas
   - Use squash merge para manter o histórico limpo
   - Verifique se o título do commit segue a convenção de commits

## Gestão de Issues

### Triagem

Ao receber uma nova issue:

1. Verifique se contém todas as informações necessárias
2. Adicione etiquetas apropriadas (bug, feature, documentation, etc.)
3. Atribua a um milestone, se aplicável
4. Responda ao autor, mesmo que seja apenas para reconhecer o recebimento

### Etiquetas Recomendadas

- `bug`: Problemas no código existente
- `feature`: Solicitações de novas funcionalidades
- `documentation`: Problemas ou melhorias na documentação
- `good first issue`: Boas issues para novos contribuidores
- `help wanted`: Issues onde precisamos de ajuda da comunidade
- `security`: Questões relacionadas à segurança
- `wontfix`: Issues que decidimos não resolver

### Fechamento de Issues

Feche issues quando:

- O problema foi resolvido e mesclado na branch principal
- A solicitação de recurso foi implementada
- A issue está duplicada
- A issue está desatualizada ou não é mais relevante

Sempre forneça uma explicação ao fechar uma issue.

## Processo de Release

### Preparação

1. Verifique se todos os changesets estão atualizados
2. Execute a suite completa de testes
3. Verifique se a documentação está atualizada

### Execução

1. Mescle o PR de release criado pelo Changesets
2. Verifique se a publicação automática foi bem-sucedida
3. Verifique se a tag foi criada corretamente

### Pós-Release

1. Anuncie o release nos canais apropriados
2. Monitore relatórios de problemas após o release
3. Atualize a documentação online, se necessário

## Comunicação

### Com Contribuidores

- Responda a comentários e PRs em tempo hábil
- Seja respeitoso e construtivo
- Explique claramente as decisões de design
- Agradeça pelas contribuições

### Entre Mantenedores

- Use o canal privado para discussões entre mantenedores
- Realize reuniões regulares para discutir o roadmap
- Documente decisões importantes

## Segurança

### Tratamento de Vulnerabilidades

1. Avalie a gravidade da vulnerabilidade relatada
2. Para problemas críticos, prepare um patch imediatamente
3. Coordene a divulgação com o relator da vulnerabilidade
4. Siga o processo descrito em SECURITY.md

### Verificações Regulares

1. Execute verificações de dependências regularmente
2. Monitore alertas de segurança
3. Atualize dependências com vulnerabilidades conhecidas

## Melhores Práticas

1. **Mantenha-se atualizado**: Acompanhe as tendências e melhores práticas da comunidade
2. **Automatize o que puder**: Use CI/CD para reduzir trabalho manual
3. **Documente decisões**: Mantenha um registro das decisões de design importantes
4. **Delegue responsabilidades**: Envolva contribuidores regulares em tarefas de manutenção
5. **Cuide da saúde do projeto**: Monitore métricas como tempo de resposta a issues e PRs

## Recursos para Mantenedores

- [Guia de Versionamento](VERSIONING.md)
- [Convenção de Commits](COMMIT_CONVENTION.md)
- [Processo de CI/CD](CI_CD.md)
- [Política de Segurança](SECURITY.md)