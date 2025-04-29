import axios from "axios";

const livrosAPI = axios.create({
  baseURL: "http://localhost:8000",
});

function getLivros() {
  // metodo get para a instancia criada do axios livrosAPI
  const response = livrosAPI.get("/");

  // return os dados da api do response
  return response.data;
}

// exporta as funcoes
export { getLivros };
