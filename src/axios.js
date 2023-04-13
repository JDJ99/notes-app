import axios from "axios";

const instance = axios.create({
  baseURL: "https://docent.cmi.hro.nl/bootb/demo/notes/",
});

export default instance;
