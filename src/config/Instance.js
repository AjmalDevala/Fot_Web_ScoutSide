import axios from "axios";

const Instance = axios.create({
  baseURL: "http://localhost:7007/api",
});

export default Instance;