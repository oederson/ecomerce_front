import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    width: 20%;
    margin-top: 0px;
    margin-left: 10px;
    height: 40px;

    justify-content: center;
    margin-bottom: -10px;
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
const Titulo = styled.h3`
    color: teal;
    text-transform: capitalize;
    font-size: 22px;
    font-weight: bold;
 //   text-shadow: 2px 2px 0px #000000;
 @media screen and (max-width: 1000px){
    font-size:14px;
      }

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
        <Link to={`/produtos/categoria/${item.nome}`} style={{ textDecoration: 'none' }}>
           <Titulo>{item.nome}</Titulo>
        </Link>
    </Container>
  )
}
export default CategoriaItem
