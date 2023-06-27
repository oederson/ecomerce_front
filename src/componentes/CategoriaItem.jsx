import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    flex: 1;
    margin: 0px;
    height: 40px;
    position: relative;
    justify-content: center;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Titulo = styled.h2`
    color: teal;
    margin-bottom: 20px;
    font-weight: bold;
 //   text-shadow: 2px 2px 0px #000000;

`;
const Botao = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoriaItem = ({item}) => {
  return (
    <Container>
        <Link to={`/produtos/categoria/${item.categoria}`} style={{ textDecoration: 'none' }}>
           
            
                <Titulo>{item.titulo}</Titulo>
                
            
        </Link>
    </Container>
  )
}
export default CategoriaItem
