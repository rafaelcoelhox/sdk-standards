# Política de Segurança

## Versões Suportadas

Atualmente oferecemos suporte de segurança para as seguintes versões:

| Versão | Suportada          |
| ------ | ------------------ |
| 2.x.x  | :white_check_mark: |
| 1.x.x  | :white_check_mark: |
| < 1.0  | :x:                |

## Reportando uma Vulnerabilidade

A AbacatePay leva a segurança de seus produtos muito a sério. Agradecemos à comunidade por seu trabalho em melhorar a segurança de nossos SDKs e valorizamos o tempo e esforço para divulgar responsavelmente as vulnerabilidades encontradas.

### Como Reportar

Se você acredita ter encontrado uma vulnerabilidade de segurança em qualquer SDK da AbacatePay, por favor siga estas etapas:

1. **NÃO divulgue a vulnerabilidade publicamente** através de issues do GitHub, fóruns ou qualquer outro canal público.

2. Envie um e-mail para nossa equipe de segurança em **security@abacatepay.com** com os seguintes detalhes:
   - Descrição detalhada da vulnerabilidade 
   - Passos para reproduzir o problema
   - Possível impacto da vulnerabilidade
   - Sugestão de mitigação ou correção, se houver
   - Seu nome/contato para reconhecimento (opcional)

3. Aguarde a confirmação de recebimento. Nosso objetivo é responder a todos os relatórios dentro de 48 horas.

### O que acontece a seguir

Após o envio do relatório:

1. Nossa equipe confirma o recebimento do seu relatório.
2. Investigamos e verificamos a vulnerabilidade reportada.
3. Determinamos a gravidade e impacto da vulnerabilidade.
4. Desenvolvemos e testamos uma correção.
5. Lançamos um patch para todas as versões suportadas afetadas.
6. Reconhecemos publicamente sua contribuição, a menos que você prefira permanecer anônimo.

### Cronograma de Divulgação

Nosso objetivo é seguir este cronograma para abordar vulnerabilidades:

- **Confirmação**: Dentro de 48 horas após o relatório
- **Validação**: Dentro de 1 semana após a confirmação
- **Prazo de Correção**: 
  - Crítica: 7 dias
  - Alta: 14 dias
  - Média: 30 dias
  - Baixa: 90 dias

Podemos ajustar este cronograma com base na complexidade da vulnerabilidade e na coordenação necessária.

## Programa de Recompensas

Atualmente não oferecemos um programa formal de recompensas por bugs. No entanto, reconhecemos publicamente os pesquisadores de segurança que relatam vulnerabilidades de acordo com esta política, salvo solicitação em contrário.

## Melhores Práticas

Recomendamos aos usuários dos SDKs da AbacatePay seguir estas práticas de segurança:

- Mantenha sempre os SDKs atualizados com a versão mais recente
- Nunca exponha suas chaves de API em código-fonte público
- Utilize ambientes de sandbox para testes
- Implemente verificações de segurança em seu CI/CD para identificar dependências vulneráveis
- Siga as recomendações de segurança específicas da documentação do SDK