const { ler, salvar } = require('./arquivo')

const rotas = {
  GET: {
    '/usuarios': async function(req, res) {
      res.setHeader('Content-Type', 'application/json; charset=UTF-8')
      const dados = await ler()
      const dadosEmString = JSON.stringify(dados)
      res.write(dadosEmString)
      res.end()
    }
  },
  POST: {
    '/usuarios': async function(req, res) {
      const dados = await ler()
      const getNovoDado = new Promise((resolve, reject) => {
        req.on('data', (chunk) => {
          resolve(chunk)
        })
      })
      const novoDado = await getNovoDado
      const novoDadoString = novoDado.toString()
      const novoDadoJson = JSON.parse(novoDadoString)
      dados.push(novoDadoJson)
      salvar(dados)
      res.end()
    }
  }
}

module.exports = rotas
