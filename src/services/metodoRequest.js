import axios from "axios";
const bkeURI =  "https://backend-production-2fa9.up.railway.app/" //import.meta.env.VITE_API_URL;

const ChamadaApi = (token) => {
  
  const tipoResquisiçao = () =>{
    if(token){
        return axios.create({
            baseURL: bkeURI,
            headers: {
              Authorization: token,
            },
          });
    }else{
        return axios.create({
            baseURL: bkeURI,
        });
        }
  }
    return (tipoResquisiçao())
};

export default ChamadaApi;