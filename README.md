# API youtube
</br>
</br>

## 🚀 Sobre

Neste projeto, nós implementamos a API do YouTube Data para retornar o idChannel de um usuário. 
A API do YouTube Data permite que você obtenha informações sobre canais, vídeos e outras entidades do YouTube.
</br>
</br>

## 🔧 Pré-requisitos

- Node.js - [Guia de instalação](https://nodejs.org/en/download/package-manager/)
- OAuth2
- Conhecimentos em API

</br>
</br>

## 📚 Instalação

```bash

# Instale as dependências
npm install

# Crie a rota de login (retornara a rota para login)
node login.js

# Copie o code_url (!!CUIDADO COM O RETORNO 4/0A pois vem mal formatado na urln)

# Gere o acess_token (utilize o code_url)
node acessToken.js

# VEJA OS ANALYTICS (utilize o acessToken)
node alytics.js
