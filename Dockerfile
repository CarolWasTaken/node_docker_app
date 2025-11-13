# Imagem base
FROM node:18

# Diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar arquivos do projeto
COPY package*.json ./
COPY server.js ./

# Instalar dependências
RUN npm install --only=production

# Expor a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
