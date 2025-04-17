# Política de Versionamento

Este documento descreve a política de versionamento seguida por todos os SDKs oficiais da AbacatePay.

## Versionamento Semântico

Todos os SDKs da AbacatePay seguem o [Versionamento Semântico 2.0.0](https://semver.org/).

### Formato de Versão

As versões seguem o formato: `MAIOR.MENOR.PATCH`

- **MAIOR (X)**: Incrementado quando há mudanças incompatíveis com versões anteriores (breaking changes)
- **MENOR (Y)**: Incrementado quando há adição de funcionalidades de forma compatível com versões anteriores
- **PATCH (Z)**: Incrementado quando há correções de bugs de forma compatível com versões anteriores

### Exemplos Práticos

| Alteração | Tipo de Versão | Exemplo |
|-----------|----------------|---------|
| Corrigir um bug na validação de pagamentos | PATCH | 1.2.3 → 1.2.4 |
| Adicionar suporte para um novo tipo de pagamento | MENOR | 1.2.4 → 1.3.0 |
| Renomear métodos públicos da API | MAIOR | 1.3.0 → 2.0.0 |

## Gerenciamento com Changesets

Utilizamos [Changesets](https://github.com/changesets/changesets) para gerenciar versões e changelogs:

1. Ao fazer uma alteração, execute: `npm run define:change`
2. Descreva a alteração e selecione o tipo de versão (patch, minor, major)
3. Um arquivo será criado na pasta `.changeset/`
4. Este arquivo deve ser commitado junto com suas alterações
5. Quando um PR é mesclado na branch principal, o Changeset Bot cria um PR de release
6. Ao mesclar o PR de release, as versões são atualizadas e um novo pacote é publicado

## Ciclo de Lançamento

Para manter nossos SDKs atualizados e consistentes, seguimos o seguinte ciclo de lançamento:

- **Lançamentos de Patch**: Conforme necessário, para correções de bugs
- **Lançamentos Menores**: A cada 4-6 semanas, para novas funcionalidades
- **Lançamentos Maiores**: Com planejamento prévio, normalmente a cada 6-12 meses

## Pré-lançamentos

Para versões em desenvolvimento, usamos os seguintes sufixos:

- **alpha**: Versões iniciais para testes internos
- **beta**: Versões para testes externos limitados
- **rc**: Candidatos a lançamento, próximos da versão final

Exemplo: `2.0.0-beta.1`

## Suporte a Versões Anteriores

Nossa política de suporte para versões anteriores:

- Versões MAIORES são suportadas por pelo menos 12 meses após o lançamento da próxima versão MAIOR
- Correções de segurança críticas podem ser backported para versões mais antigas
- Versões que atingirem o fim do suporte serão claramente marcadas no README e na documentação

## Sincronização entre SDKs

Buscamos manter todos os SDKs sincronizados em funcionalidades, mesmo que as versões possam não ser idênticas devido às especificidades de cada linguagem.

### Equivalência Funcional

SDKs em diferentes linguagens devem oferecer equivalência funcional, mesmo que as versões não sejam idênticas. Quando um recurso é adicionado a um SDK, buscamos implementá-lo em todos os outros assim que possível.

### Tabela de Compatibilidade

Mantemos uma tabela de compatibilidade que mapeia as versões entre diferentes SDKs e a API central:

| API AbacatePay | Node.js SDK | Python SDK | PHP SDK | Java SDK | Go SDK |
|----------------|-------------|------------|---------|----------|--------|
| v1.0           | 1.x.x       | 1.x.x      | 1.x.x   | 1.x.x    | 1.x.x  |
| v2.0           | 2.x.x       | 2.x.x      | 2.x.x   | 2.x.x    | 2.x.x  |

## Perguntas Frequentes

**P: Como sei qual versão do SDK usar com minha versão da API?**  
R: Consulte nossa tabela de compatibilidade na documentação ou no README do SDK.

**P: Como migro da versão 1.x para 2.x?**  
R: Cada versão MAIOR inclui um guia de migração detalhado na documentação.

**P: Os SDKs de diferentes linguagens têm as mesmas funcionalidades?**  
R: Sim, buscamos manter equivalência funcional entre todos os SDKs, embora a implementação possa variar conforme as convenções de cada linguagem.