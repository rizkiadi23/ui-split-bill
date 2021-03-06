import axios from "axios";

function get(url, getParams = {}, config = {}) {
  config.headers = config.headers || {"Content-Type": "application/json"};
  config.params = getParams;

  return axios.get(url, config);
}

function post(url, data = {}, config = {}) {
  config.headers = config.headers || {"Content-Type": "application/json"};

  return axios.post(url, data, config);
}

function patch(url, data = {}, config = {}) {
  config.headers = config.headers || {"Content-Type": "application/json"};

  return axios.patch(url, data, config);
}

function del(url, data = {}, config = {}) {
  config.headers = config.headers || {"Content-Type": "application/json"};

  return axios.delete(url, data, config);
}

const apiServices = {
  get: get, 
  post: post, 
  patch: patch, 
  del: del
};

export default apiServices;
