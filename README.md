# AbacatePay SDK Standards

Este repositório contém os padrões, diretrizes e recursos compartilhados para todos os SDKs oficiais da AbacatePay. Ele serve como fonte de verdade para mantenedores e contribuidores dos SDKs.

## SDKs Oficiais

A AbacatePay mantém os seguintes SDKs oficiais:

- [abacatepay-nodejs-sdk](https://github.com/AbacatePay/abacatepay-nodejs-sdk) - SDK para Node.js/JavaScript
- [abacatepay-python-sdk](https://github.com/AbacatePay/abacatepay-python-sdk) - SDK para Python
- [abacatepay-php-sdk](https://github.com/AbacatePay/abacatepay-php-sdk) - SDK para PHP
- [abacatepay-java-sdk](https://github.com/AbacatePay/abacatepay-java-sdk) - SDK para Java
- [abacatepay-go-sdk](https://github.com/AbacatePay/abacatepay-go-sdk) - SDK para Go
- [abacatepay-cli](https://github.com/AbacatePay/abacatepay-cli) - CLI para interagir com a AbacatePay

## Documentos Principais

- [CONTRIBUTING.md](./CONTRIBUTING.md) - Diretrizes gerais para contribuir com os SDKs da AbacatePay
- [VERSIONING.md](./VERSIONING.md) - Nossa política de versionamento e lançamentos
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - Código de conduta para contribuidores
- [SECURITY.md](./SECURITY.md) - Política de segurança e como reportar vulnerabilidades
- [MAINTAINERS.md](./MAINTAINERS.md) - Guia para mantenedores dos SDKs

## Templates

Este repositório contém templates para:

- [Template de README](./templates/README.md) para SDKs
- [Templates de Issues](./templates/issue_templates/) para reportar bugs e solicitar funcionalidades
- [Templates de Workflows](./templates/workflows/) para CI/CD

## Como Usar

### Para Mantenedores

Se você é um mantenedor de um dos SDKs oficiais da AbacatePay:

1. Familiarize-se com este repositório, especialmente o documento [MAINTAINERS.md](./MAINTAINERS.md)
2. Use os scripts em `./scripts/` para aplicar padrões consistentes ao seu SDK
3. Certifique-se de que seu SDK segue o modelo de versionamento semântico descrito em [VERSIONING.md](./VERSIONING.md)
4. Implemente os workflows de CI/CD apropriados para a linguagem do seu SDK

### Para Contribuidores

Se você deseja contribuir com qualquer um dos SDKs da AbacatePay:

1. Leia o [CONTRIBUTING.md](./CONTRIBUTING.md) para entender nosso processo de contribuição
2. Familiarize-se com o [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
3. Siga as diretrizes específicas do SDK para o qual deseja contribuir

## Roadmap

Nosso roadmap para os SDKs inclui:

- Padronização completa de todos os SDKs
- Melhoria contínua da documentação
- Implementação consistente de recursos em todas as linguagens
- Expansão para novas linguagens de programação (Ruby, .NET, etc.)

## Licença

Todos os conteúdos deste repositório estão licenciados sob a licença MIT.