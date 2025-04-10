#!/bin/bash
# Script para aplicar padrões a um SDK existente da AbacatePay
# Uso: ./scripts/setup-existing-sdk.sh nome-do-repositorio

# Verificar se foi fornecido um nome de repositório
if [ "$#" -ne 1 ]; then
    echo "Uso: $0 <nome-do-repositorio>"
    echo "Exemplo: $0 abacatepay-nodejs-sdk"
    exit 1
fi

REPO=$1
TEMP_DIR="temp-$REPO"

echo "🥑 Configurando padrões para $REPO..."

# Clone o repositório
echo "📦 Clonando o repositório..."
git clone "https://github.com/AbacatePay/$REPO.git" $TEMP_DIR
cd $TEMP_DIR

# Criar estrutura de diretórios necessária
echo "📁 Criando estrutura de diretórios..."
mkdir -p .github/ISSUE_TEMPLATE
mkdir -p .github/workflows
mkdir -p docs
mkdir -p examples

# Copiar templates
echo "📋 Copiando templates de issues..."
cp ../templates/issue_templates/* .github/ISSUE_TEMPLATE/

echo "📝 Copiando template de mensagem de commit..."
cp ../.gitmessage .

echo "📄 Copiando documentos padrão..."
# Não sobrescrever README.md existente, apenas verificar e atualizar se necessário
if [ -f "README.md" ]; then
    echo "ℹ️ README.md já existe, pulando..."
else
    echo "📄 Criando README.md básico..."
    # Determinar a linguagem do SDK baseado no nome
    LANG=$(echo $REPO | cut -d'-' -f2)
    # Criar README básico
    cp ../templates/README.md .
    # Substituir placeholders
    sed -i "s/\[LINGUAGEM\]/$LANG/g" README.md
    sed -i "s/\[sdk\]/$REPO/g" README.md
fi

# Copiar arquivos de contribuição e segurança
cp ../CONTRIBUTING.md .
cp ../CODE_OF_CONDUCT.md .
cp ../SECURITY.md .

# Verificar se já existe um CHANGELOG.md
if [ ! -f "CHANGELOG.md" ]; then
    echo "📝 Criando CHANGELOG.md inicial..."
    echo "# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/spec/v2.0.0.html).

## [Não Lançado]

### Adicionado
- Configuração inicial do projeto
" > CHANGELOG.md
fi

# Verificar se já existe um arquivo de licença
if [ ! -f "LICENSE" ]; then
    echo "📜 Criando arquivo de licença MIT..."
    cp ../LICENSE .
fi

# Criar ou atualizar o arquivo de configuração do Git para usar o template de mensagem de commit
git config --local commit.template .gitmessage

# Adicionar as alterações ao Git
echo "🔄 Adicionando alterações ao Git..."
git add .
git commit -m "docs: adiciona templates e documentos padrão"

echo "✅ Configuração concluída para $REPO!"
echo ""
echo "🚀 Próximos passos:"
echo "1. Revise as alterações: cd $TEMP_DIR"
echo "2. Faça push para o repositório remoto: git push origin main"
echo "3. Configure GitHub Actions para CI/CD"
echo ""
echo "Para configurar o template de commit em outros clones deste repositório, use:"
echo "  git config --local commit.template .gitmessage"