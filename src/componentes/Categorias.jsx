import styled from "styled-components"
import { categorias } from "../dados"
import CategoriaItem from "./CategoriaItem";

const Container = styled.div`
    display: flex;
   
    padding: 0px;
    justify-content: space-between;
`;

const Categorias = () => {
  return (
    <Container>
        {categorias.map(item=>(
            <CategoriaItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categorias