import axios from 'axios';

const ibge = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
});

export default ibge;
