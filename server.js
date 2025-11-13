const http = require('http');
const fs = require('fs');
const path = require('path');

// Função que gera o arquivo data.json
function generateDataFile() {
  const data = {
    timedate: new Date().toISOString()
  };

  fs.writeFileSync(
    path.join(__dirname, 'data.json'),
    JSON.stringify(data, null, 2)
  );
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {

    // sempre gera o arquivo ao acessar /
    generateDataFile();

    const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);

  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
  generateDataFile(); 
});
