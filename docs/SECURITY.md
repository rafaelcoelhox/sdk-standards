# Política de Segurança

## Relatando uma Vulnerabilidade

A equipe do AbacatePay leva a sério a segurança dos nossos SDKs. Se você descobrir uma vulnerabilidade de segurança, por favor, siga estas etapas:

1. **NÃO** abra uma issue pública
2. Envie um e-mail para [seguranca@abacatepay.com](mailto:seguranca@abacatepay.com)
3. Inclua informações detalhadas sobre a vulnerabilidade
4. Aguarde uma resposta inicial em até 48 horas
5. Por favor, evite compartilhar os detalhes da vulnerabilidade publicamente até que tenhamos tido a chance de resolvê-la

## Processo de Resposta

Nossa equipe de segurança segue este processo ao receber um relatório:

1. Confirmação de recebimento dentro de 48 horas
2. Avaliação inicial da vulnerabilidade em até 5 dias úteis
3. Desenvolvimento de uma correção e plano de lançamento
4. Comunicação com o relator sobre o progresso
5. Divulgação coordenada após a correção ser implementada

## Melhores Práticas de Segurança

Ao usar os SDKs da AbacatePay, siga estas diretrizes:

### Segurança de Tokens API
- Nunca adicione seus tokens API ao controle de versão
- Use variáveis de ambiente ou sistemas seguros de gerenciamento de segredos
- Troque seus tokens API periodicamente
- Use tokens diferentes para ambientes de desenvolvimento e produção

```javascript
// Prática Recomendada
const abacate = AbacatePay(process.env.ABACATEPAY_API_KEY);

// NUNCA faça isso
const abacate = AbacatePay("api_key_123456789");
```

### Validação de Entrada
Sempre valide os dados de entrada antes de enviá-los para a API:

```javascript
// Sempre verifique valores antes de enviar
if (amount <= 0) {
  throw new Error("O valor deve ser maior que zero");
}
```

### Tratamento de Erros
Implemente tratamento adequado de erros para lidar com falhas de API de forma segura:

```javascript
try {
  const billing = await abacate.billing.create(data);
} catch (error) {
  // Registre o erro sem expor informações sensíveis
  console.error("Erro ao criar cobrança:", error.message);
  // Implemente recovery adequado
}
```

## Divulgação Responsável

Seguimos uma política de divulgação responsável:

1. Reconhecemos os relatórios de segurança dentro de 48 horas
2. Confirmamos a vulnerabilidade e determinamos seu impacto
3. Desenvolvemos uma correção e testamos internamente
4. Lançamos a correção e notificamos a comunidade
5. Damos crédito aos pesquisadores de segurança que relataram a vulnerabilidade (se desejarem)

## Hall da Fama (confirmar isso com chrys e daniel)

Agradecemos a todos os pesquisadores de segurança que contribuíram para tornar nossos SDKs mais seguros. Os colaboradores que relataram vulnerabilidades significativas são listados em nosso Hall da Fama de Segurança, mediante consentimento.