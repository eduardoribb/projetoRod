const https = require('https');

function buscarCEP(cep) {
const url = `https://viacep.com.br/ws/${cep}/json/`;

https.get(url, (resp) => {
let data = '';


resp.on('data', (chunk) => {
data += chunk;
});


resp.on('end', () => {
const jsonResponse = JSON.parse(data);
if (jsonResponse.erro) {
console.log('CEP não encontrado.');
} else {
console.log('Dados do CEP:', jsonResponse);
}
});

}).on("error", (err) => {
console.log("Erro ao buscar o CEP: " + err.message);
});
}


const cep = '03081003';
buscarCEP(cep);
