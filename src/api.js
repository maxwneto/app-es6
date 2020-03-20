import axios from 'axios';

//create cria configuração do axios para o projeto
const api = axios.create({
//definição de uma baseURL para que todas as conexões partam por este endereço.
    baseURL: 'htpps://api.github.com',
});

export default api;