import styled from "styled-components"
import CategoriaItem from "./CategoriaItem";
import { useEffect, useState } from "react";
import ChamadaApi from "../services/metodoRequest";


const Container = styled.div`
  display: flex;
  width:65%;
  margin: 0px auto;
  align-items: center;
  justify-content: space-evenly;

`;

const Titulo = styled.h2`
  
  color: teal;

  margin-bottom: 10px;
 // font-weight: bold;
//  text-shadow: 2px 2px 0px #000000;
`;

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  
  
  
  useEffect(()=>{
    const getCategorias = async ()=>{
      try{
        const res = await ChamadaApi().get(`/categorias`);
        setCategorias(res.data.content)
        console.log(res)
      }catch(err){}
    };
    getCategorias()
  },[]);
  
 
  return (
    <Container>
      <Titulo>Categorias </Titulo> 
        {categorias.map(item=>(
            <CategoriaItem item={item} key={item.id}/>
        ))}
       </Container>
     
  )
}

export default Categorias