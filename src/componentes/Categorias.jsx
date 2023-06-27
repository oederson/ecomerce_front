import styled from "styled-components"
import { categorias } from "../dados"
import CategoriaItem from "./CategoriaItem";

const Container = styled.div`
    display: flex;
    flex:1;
    padding: 0px;
    justify-content: space-evenly;
`;
const Esquerda = styled.div`
    margin-left: 60px;
    width:10vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    
    `;
    const Meiofim = styled.div`
    width:80vw;
    display:flex;
    align-items:center;
    `;
    const Titulo = styled.h2`
    color: teal;
    margin-bottom: 0px;
    font-weight: bold;
    text-shadow: 2px 2px 0px #000000;

`;

const Categorias = () => {
  return (
    <Container>
      <Esquerda>
      <Titulo>Categorias</Titulo> 
      </Esquerda>
       <Meiofim>
        {categorias.map(item=>(
            <CategoriaItem item={item} key={item.id}/>
        ))}
        </Meiofim>
    </Container>
  )
}

export default Categorias