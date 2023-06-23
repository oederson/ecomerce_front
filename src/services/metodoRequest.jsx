import axios from "axios";

const BASE_URI = import.meta.env.VITE_API_URL;

const ChamadaApi = (token) => {
  
  const tipoResquisiçao = () =>{
    if(token){
        return axios.create({
            baseURL: BASE_URI,
            headers: {
              Authorization: token,
            },
          });
    }else{
        return axios.create({
            baseURL: BASE_URI
        });
        }
  }
    return (tipoResquisiçao())
};

export default ChamadaApi;