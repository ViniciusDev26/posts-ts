import axios from "axios";

const api = axios.create({
  baseURL: "https://e302-168-181-201-166.sa.ngrok.io"
})

export { api }