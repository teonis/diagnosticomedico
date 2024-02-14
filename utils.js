export const API_URL = 'https://api.seudominio.com';
const TOKEN_KEY = 'token';

const cacheFormatarData = new Map();
const cacheFormatarMoeda = new Map();

export function formatarData(data) {
  if (!(data instanceof Date)) {
    throw new Error('O argumento deve ser uma instância de Date');
  }

  const chaveCache = data.getTime();

  if (cacheFormatarData.has(chaveCache)) {
    return cacheFormatarData.get(chaveCache);
  }

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const resultado = data.toLocaleDateString('pt-BR', options);

  cacheFormatarData.set(chaveCache, resultado);

  return resultado;
}

export function formatarMoeda(valor) {
  if (typeof valor !== 'number') {
    throw new Error('O argumento deve ser um número');
  }

  const chaveCache = valor.toFixed(2);

  if (cacheFormatarMoeda.has(chaveCache)) {
    return cacheFormatarMoeda.get(chaveCache);
  }

  const resultado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  cacheFormatarMoeda.set(chaveCache, resultado);

  return resultado;
}

export function isAuthenticated() {
  const token = localStorage.getItem(TOKEN_KEY);
  return token && token !== 'null';
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}