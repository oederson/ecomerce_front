import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { adicionarProduto } from "../redux/carrinhoRedux"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container =styled.div`
    flex: 1;
    margin: 5px;
    min-width: 380px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
       opacity: 1; 
    };
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Imagem = styled.img`
    width: 100%;
    height:100%;
    z-index: 2;
`;

const Icone = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Produto = ({ produto }) => {
    const quantidade = 1;
    const dispatch = useDispatch();
    const handleClick = () =>{
        console.log(produto)
        dispatch(adicionarProduto({ ...produto, quantidade }));
    }

  return (
    <Container>
        <Circle/>
        <Imagem src ={produto.imagem}/>
        <Info>
            <Icone>
                <ShoppingCartOutlined onClick={handleClick}/>
            </Icone>
            <Icone>
                <Link to={`/produto/${produto.id}`}>
                <SearchOutlined/>
                </Link>
            </Icone>
            <Icone>
                <FavoriteBorderOutlined/>
            </Icone>
        </Info>
    </Container>
  )
}

export default Produto