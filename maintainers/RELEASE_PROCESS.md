# Processo de Release

Este documento descreve o processo de release para os SDKs da AbacatePay.

## Visão Geral

Utilizamos um processo automatizado baseado em [Changesets](https://github.com/changesets/changesets) para gerenciar versões e publicações. Este processo garante:

1. Versionamento semântico consistente
2. Changelogs automáticos e detalhados
3. Publicação confiável de pacotes

## Fluxo de Trabalho

### 1. Desenvolvimento

Durante o desenvolvimento:

1. Faça suas alterações em uma branch de feature
2. Execute `npm run define:change` para documentar suas alterações
3. Siga as instruções para selecionar o tipo de mudança (patch, minor, major)
4. Escreva uma descrição clara da alteração
5. Commit o arquivo gerado na pasta `.changeset/` junto com suas alterações
6. Abra um Pull Request

### 2. Revisão e Merge

Após a aprovação do PR:

1. O PR é mesclado na branch principal (main)
2. O GitHub Action de Changesets é acionado
3. Se houver changesets pendentes, um PR de release é criado automaticamente

### 3. Release

O PR de release:

1. Atualiza as versões dos pacotes conforme os changesets
2. Atualiza o CHANGELOG.md com as alterações documentadas
3. Após aprovação e merge, o pacote é publicado automaticamente no npm

## Tipos de Release

### Release Regular

Para a maioria das alterações, seguimos o fluxo padrão descrito acima.

### Release de Emergência

Para correções críticas que precisam ser lançadas imediatamente:

1. Crie uma branch a partir da última tag de release: `git checkout -b hotfix/descricao v1.2.3`
2. Faça as alterações necessárias
3. Execute `npm run define:change` e selecione o tipo apropriado (geralmente patch)
4. Abra um PR para a branch principal
5. Após aprovação e merge, o release será publicado automaticamente

### Pre-releases

Para versões experimentais ou beta:

1. Configure o modo de pre-release: `npx changeset pre enter beta`
2. Desenvolva normalmente, criando changesets para suas alterações
3. Os releases serão publicados com o sufixo beta (ex: 1.2.0-beta.1)
4. Para sair do modo pre-release: `npx changeset pre exit`

## Verificações Pré-Release

Antes de cada release, o pipeline de CI verifica:

1. Todos os testes passam
2. A cobertura de código atende aos requisitos mínimos
3. Não há vulnerabilidades de segurança críticas
4. A documentação está atualizada

## Comunicação de Release

Após cada release:

1. Um anúncio é publicado no canal de comunicação apropriado
2. A documentação online é atualizada
3. Os usuários são notificados sobre mudanças importantes

## Rollback

Em caso de problemas críticos após um release:

1. Identifique o problema e sua gravidade
2. Para problemas críticos, publique imediatamente uma nova versão com a correção
3. Em casos extremos, considere despublicar a versão problemática temporariamente

## Cronograma de Releases

- **Patch releases**: Conforme necessário, geralmente dentro de 1-2 dias após a aprovação
- **Minor releases**: Agendados regularmente, a cada 2-4 semanas
- **Major releases**: Planejados com antecedência, geralmente a cada 6-12 meses

## Responsabilidades

- **Mantenedores**: Revisão e aprovação de PRs de release
- **CI/CD**: Execução automática de testes e publicação
- **Contribuidores**: Documentação adequada das alterações via changesets 