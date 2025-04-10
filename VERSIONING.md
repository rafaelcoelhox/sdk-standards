# Política de Versionamento dos SDKs AbacatePay

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

## Ciclo de Lançamento

Para manter nossos SDKs atualizados e consistentes, seguimos o seguinte ciclo de lançamento:

- **Lançamentos de Patch**: Conforme necessário, para correções de bugs
- **Lançamentos Menores**: A cada 4-6 semanas, para novas funcionalidades
- **Lançamentos Maiores**: Com planejamento prévio, normalmente a cada 6-12 meses

## Sincronia entre SDKs

Buscamos manter todos os SDKs sincronizados em funcionalidades, mas as versões podem não ser idênticas devido às especificidades de cada linguagem. 

### Equivalência Funcional

SDKs em diferentes linguagens devem oferecer equivalência funcional, mesmo que as versões não sejam idênticas. Quando um recurso é adicionado a um SDK, buscamos implementá-lo em todos os outros assim que possível.

### Tabela de Compatibilidade

Mantemos uma tabela de compatibilidade que mapeia as versões entre diferentes SDKs e a API central:

| API AbacatePay | Node.js SDK | Python SDK | PHP SDK | Java SDK | Go SDK |
|----------------|-------------|------------|---------|----------|--------|
| v1.0           | 1.x.x       | 1.x.x      | 1.x.x   | 1.x.x    | 1.x.x  |
| v2.0           | 2.x.x       | 2.x.x      | 2.x.x   | 2.x.x    | 2.x.x  |

## Suporte a Versões Anteriores

Nossa política de suporte para versões anteriores:

- Versões MAIORES são suportadas por pelo menos 12 meses após o lançamento da próxima versão MAIOR
- Correções de segurança críticas podem ser backported para versões mais antigas
- Versões que atingirem o fim do suporte serão claramente marcadas no README e na documentação

### Cronograma de Suporte

| Versão | Data de Lançamento | Fim do Suporte | Status      |
|--------|-------------------|----------------|-------------|
| 1.x    | 01/01/2023        | 01/01/2025     | Suportada   |
| 0.x    | 01/01/2022        | 01/01/2024     | Descontinuada |

## Pré-lançamentos

Para versões em desenvolvimento, usamos os seguintes sufixos:

- **alpha**: Primeiras versões de teste, possivelmente instáveis e incompletas
  - Exemplo: `1.0.0-alpha.1`
- **beta**: Funcionalidades completas, mas ainda em teste
  - Exemplo: `1.0.0-beta.1`
- **rc** (release candidate): Versão candidata ao lançamento final
  - Exemplo: `1.0.0-rc.1`

## Processo de Release

Nosso processo de lançamento de novas versões:

1. **Preparação**:
   - Atualização do CHANGELOG.md com todas as alterações
   - Atualização da versão no arquivo de configuração do projeto
   - Execução da suite completa de testes

2. **Lançamento**:
   - Criação de tag no Git (`v1.2.3`)
   - Publicação nos registros específicos (npm, PyPI, etc.)
   - Criação de GitHub Release com notas detalhadas

3. **Comunicação**:
   - Anúncio em canais de comunicação
   - Atualização da documentação online

## Descontinuação

Quando uma versão MAIOR é descontinuada:

1. Anúncio com pelo menos 3 meses de antecedência
2. Adição de avisos de depreciação na documentação
3. Suporte continuado para correções de segurança críticas por 6 meses adicionais
4. Instruções claras de migração para a nova versão

## Notas de Lançamento e Changelog

Cada SDK mantém um arquivo CHANGELOG.md que segue o formato [Keep a Changelog](https://keepachangelog.com/):

- Versões organizadas em ordem cronológica inversa
- Cada versão com sua data de lançamento
- Alterações agrupadas em categorias: Added, Changed, Deprecated, Removed, Fixed, Security

## Perguntas Frequentes

**P: Como sei qual versão do SDK usar com minha versão da API?**  
R: Consulte nossa tabela de compatibilidade na documentação ou no README do SDK.

**P: Como migro da versão 1.x para 2.x?**  
R: Cada versão MAIOR inclui um guia de migração detalhado na documentação.

**P: Os SDKs de diferentes linguagens têm as mesmas funcionalidades?**  
R: Sim, buscamos manter equivalência funcional entre todos os SDKs, embora a implementação possa variar conforme as convenções de cada linguagem.