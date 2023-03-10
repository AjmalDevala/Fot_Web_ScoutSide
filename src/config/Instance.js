import axios from "axios";

const Instance = axios.create({
  baseURL: "https://fotweb.evotym.site/api",
    // baseURL: "http://localhost:7007/api",
});



export default Instance;