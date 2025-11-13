# node_docker_app
Node Docker App

Este projeto é uma aplicação simples em Node.js, empacotada e executada dentro de um container Docker.
A aplicação possui duas rotas principais:

/write → cria (ou atualiza) o arquivo data.json

/read → lê e retorna o conteúdo de data.json

O objetivo do trabalho é demonstrar:

uso de Node.js

manipulação de arquivos (fs)

criação de imagem Docker

execução do app dentro de um container

versionamento com Git e envio ao GitHub

Tecnologias Utilizadas

Node.js

Express

fs (File System)

Docker

Docker Hub (opcional)

Git / GitHub

Estrutura do Projeto
root/
│── app.js
│── package.json
│── package-lock.json
│── Dockerfile
└── data.json   (gerado automaticamente)

Como Rodar o Projeto Localmente (sem Docker)

Instale as dependências:

npm install


Execute o servidor:

node app.js


Acesse no navegador:

Criar arquivo:

http://localhost:3000/write


Ler arquivo:

http://localhost:3000/read


O arquivo data.json será criado automaticamente na raiz do projeto.

Como Rodar Usando Docker
1. Construir a imagem
docker build -t node_docker_app .

2. Executar o container
docker run -p 3000:3000 node_docker_app

3. Testar no navegador:

Criar arquivo:

http://localhost:3000/write


Ler arquivo:

http://localhost:3000/read

Dockerfile

Seu Dockerfile deve ser assim:

FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]

Rotas da Aplicação
GET /write

Cria ou sobrescreve data.json com um JSON padrão, como:

{
  "message": "Arquivo criado com sucesso!"
}

GET /read

Retorna o conteúdo do arquivo data.json.

Como enviar ao GitHub
git add .
git commit -m "Projeto Node + Docker finalizado"
git push origin main

👤 Autor: Caroline 





Projeto desenvolvido como atividade prática de Node.js + Docker.
