import axios from "axios";

const Cielo = axios.create({
  baseURL: "https://api.cielo.com.br/order-management/v1/",
});

export default Cielo;
