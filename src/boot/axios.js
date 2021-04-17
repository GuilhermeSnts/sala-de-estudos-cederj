import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$axios = axios;

const apiUrl = 'https://saladeestudos.link';
const api = axios.create({ baseURL: '/api/' });
Vue.prototype.$api = api;

export { axios, api, apiUrl };
