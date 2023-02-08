const http = require("http");
const https = require("https");
const axios = require("axios");

const httpAgent = new http.Agent({ keepAlive: true })
const httpsAgent = new https.Agent({ keepAlive: true })

const api = axios.create({
  baseURL: "http://keepalive-serv",
  httpAgent,
  httpsAgent,
  timeout: 1000 * 5
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncCall() {
    let resp = await api.get("/");
    console.log(resp);
}

async function fun() {
  while (true) {
    try {
      await asyncCall();
    }
    catch (e) {
      console.log(e);
    }
    await sleep(1000);
  }
}

fun();
  