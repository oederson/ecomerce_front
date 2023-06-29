import axios from "axios";

const ChamadaApi = (token) => {
  
  const tipoResquisiçao = () =>{
    if(token){
        return axios.create({
            baseURL: "/api",
            headers: {
              Authorization: token,
            },
          });
    }else{
        return axios.create({
            baseURL: '/api',
        });
        }
  }
    return (tipoResquisiçao())
};

export default ChamadaApi;