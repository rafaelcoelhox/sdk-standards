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

3. **Documentação e Testes**
   - A documentação foi atualizada?
   - Existem testes adequados para a nova funcionalidade ou correção de bug?
   - O CHANGELOG foi atualizado, se necessário?

4. **Feedback**
   - Seja claro e construtivo em seu feedback
   - Explique o "porquê" das sugestões, não apenas o "o quê"
   - Reconheça os aspectos positivos da contribuição

5. **Conclusão**
   - Aprove, solicite alterações, ou rejeite com uma explicação clara
   - Para PRs aprovados, decida entre "Squash and merge", "Rebase and merge", ou "Create a merge commit" (preferimos "Squash and merge" para manter o histórico limpo)

## Processo de Lançamento

Para lançar uma nova versão:

1. **Preparação**
   - Certifique-se de que todas as mudanças desejadas foram mescladas na branch principal
   - Revise o CHANGELOG para garantir que está completo e preciso
   - Verifique se a documentação está atualizada
   - Execute a suite completa de testes

2. **Criação da Versão**
   - Atualize a versão no arquivo de configuração do projeto
   - Crie uma tag Git no formato `v1.2.3`
   - Crie uma GitHub Release com notas detalhadas
   - Publique o pacote no registro relevante (npm, PyPI, etc.)

3. **Anúncio**
   - Informe a equipe de marketing para anunciar a nova versão, se aplicável
   - Atualize a documentação online, se houver

## Manutenção Entre Lançamentos

Entre os lançamentos, mantenha um ritmo constante de:

- Revisar e mesclar PRs regularmente
- Resolver issues pendentes
- Atualizar dependências regularmente usando ferramentas como Dependabot
- Monitorar problemas de segurança e aplicar patches conforme necessário

## Gestão de Comunicação

- **Tempo de Resposta**: Tente responder a issues e PRs dentro de 3 dias úteis
- **Comunicação Clara**: Seja conciso e objetivo em suas comunicações
- **Conflitos**: Ao lidar com discussões acaloradas, mantenha a calma e foque nos aspectos técnicos

## Consistência Entre SDKs

Para manter consistência entre os diferentes SDKs:

- Coordene grandes mudanças com mantenedores de outros SDKs
- Compartilhe aprendizados e melhores práticas entre equipes
- Siga as mesmas convenções de nomenclatura quando possível
- Implemente recursos similares em todos os SDKs, adaptando para idiomas específicos quando necessário

## Orientações para Novos Mantenedores

Se você é um novo mantenedor:

1. Familiarize-se com o código base e a documentação
2. Observe o histórico de issues e PRs para entender o ritmo e estilo do projeto
3. Comece com tarefas mais simples antes de assumir responsabilidades maiores
4. Peça mentoria a mantenedores mais experientes
5. Estude a API da AbacatePay para entender completamente o que o SDK está implementando

## Aprendizado Contínuo

Incentivamos todos os mantenedores a:

- Acompanhar as tendências da linguagem que mantêm
- Estudar as melhores práticas para design de API
- Participar de eventos e fóruns relacionados
- Compartilhar conhecimento com outros mantenedores

## Reconhecimento

Os mantenedores são fundamentais para o sucesso do ecossistema de SDKs da AbacatePay. Seu trabalho é reconhecido através de:

- Crédito explícito no README e em outros materiais
- Acesso a recursos adicionais para desenvolvimento
- Oportunidades de participar em eventos e discussões estratégicas

## Rotação e Transição

Se você precisar deixar o papel de mantenedor:

1. Notifique a equipe com pelo menos 30 dias de antecedência, se possível
2. Documente o estado atual do seu trabalho
3. Ajude a treinar um novo mantenedor, se aplicável
4. Transfira responsabilidades gradualmente

## Contato

Para questões relacionadas à manutenção, entre em contato com:
- **Coordenador de SDKs**: sdks@abacatepay.com
- **Equipe de Engenharia**: engineering@abacatepay.com