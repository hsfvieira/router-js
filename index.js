const http = require('http')
const rotas = require('./rotas')
const port = process.env.PORT || 3000

console.log(rotas)
http.createServer((req, res) => {
  const metodo = req.method
  const caminho = req.url
  console.log(`Método: ${metodo}, path: ${caminho}`)
  if(!rotas[metodo][caminho]) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=UTF-8')
    res.write('Página não encontrada')
    res.end() 
  } else {
    rotas[metodo][caminho](req, res)
  }
}).listen(port)
