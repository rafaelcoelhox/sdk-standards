# Diretrizes de Documentação

Este documento estabelece as diretrizes para criar e manter a documentação dos SDKs da AbacatePay.

## Princípios

1. **Clareza**: A documentação deve ser clara e direta
2. **Completude**: Cubra todos os aspectos da API pública
3. **Exemplos**: Forneça exemplos práticos para cada funcionalidade
4. **Consistência**: Mantenha um estilo consistente em toda a documentação
5. **Atualização**: Mantenha a documentação sincronizada com o código

## Estrutura da Documentação

### README.md

O README deve conter:

- Descrição breve do SDK
- Badges de status (CI, versão, cobertura)
- Instalação
- Exemplo de uso rápido
- Links para documentação detalhada
- Requisitos
- Contribuição
- Licença

### Documentação da API

Para cada módulo principal do SDK, documente:

1. **Visão geral**: Descrição do propósito do módulo
2. **Métodos**: Para cada método público:
   - Assinatura
   - Parâmetros com tipos e descrições
   - Valor de retorno
   - Exceções que podem ser lançadas
   - Exemplo de uso
3. **Tipos de dados**: Descrição dos objetos e tipos utilizados

### Guias e Tutoriais

Crie guias para cenários comuns:

- Guia de início rápido
- Autenticação
- Manipulação de erros
- Casos de uso específicos

## Formato e Estilo

### Markdown

Toda a documentação deve ser escrita em Markdown, seguindo estas convenções:

- Use `#` para títulos principais
- Use `##`, `###` para subtítulos
- Use `` ` `` para código inline
- Use blocos de código com syntax highlighting:

```javascript
// Exemplo de código
const client = new AbacatePay('api_key');
```

- Use listas para sequências de passos ou itens relacionados
- Use tabelas para dados estruturados
- Use **negrito** para ênfase
- Use *itálico* para termos técnicos na primeira menção

### Exemplos de Código

Os exemplos de código devem:

- Ser funcionais e testados
- Seguir as práticas recomendadas
- Ser concisos, mas completos
- Incluir comentários explicativos
- Mostrar tratamento de erros quando relevante

## Documentação de Código

Use JSDoc (ou equivalente) para documentar o código:

```javascript
/**
 * Cria uma nova cobrança.
 * 
 * @param {Object} options - Opções para a cobrança
 * @param {string} options.description - Descrição da cobrança
 * @param {number} options.amount - Valor em centavos
 * @param {string} [options.currency='BRL'] - Moeda (padrão: BRL)
 * @returns {Promise<Billing>} A cobrança criada
 * @throws {ValidationError} Se os parâmetros forem inválidos
 * @throws {APIError} Se ocorrer um erro na API
 * 
 * @example
 * const billing = await client.billing.create({
 *   description: 'Assinatura mensal',
 *   amount: 9990
 * });
 */
```

## Processo de Atualização

1. Atualize a documentação junto com o código relacionado
2. Inclua exemplos para novas funcionalidades
3. Atualize o CHANGELOG.md com descrições claras das mudanças
4. Para mudanças significativas, considere criar um guia de migração

## Ferramentas Recomendadas

- **TypeDoc**: Para gerar documentação a partir de comentários TypeScript
- **Docusaurus**: Para sites de documentação mais complexos
- **Storybook**: Para documentação interativa de componentes (quando aplicável)

## Preview de Documentação

Para PRs que afetam a documentação, configure um preview automático:

1. Gere a documentação durante o CI
2. Publique em um ambiente temporário
3. Adicione um comentário no PR com o link para o preview

## Checklist de Qualidade

Antes de submeter alterações na documentação, verifique:

- [ ] Ortografia e gramática
- [ ] Links funcionando corretamente
- [ ] Exemplos de código funcionais
- [ ] Consistência com a versão atual do SDK
- [ ] Formatação adequada 