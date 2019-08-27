const fs = require('fs')
const nomeDoArquivo = 'dados.json'

const ler = async () => {
  const lerArquivo = new Promise((resolve, reject) => {
    fs.readFile(nomeDoArquivo, (err, data) => {
      if(err) {
        reject(err) 
      } else {
        resolve(data)
      }
    })
  })
  const dados = await lerArquivo
  const dadosString = dados.toString()
  const dadosFormatados = JSON.parse(dadosString)
  return dadosFormatados
}

const salvar = (dados) => {
  const dadosString = JSON.stringify(dados)
  fs.writeFile(nomeDoArquivo, dadosString, (err) => {
    if(err) {
      throw err
    } else {
      return true
    }
  })

}

module.exports = {
  ler: ler,
  salvar: salvar
}
