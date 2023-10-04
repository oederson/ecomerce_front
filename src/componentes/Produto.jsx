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
const Titulo = styled.h1`
    width: 400px; /* Defina o valor adequado para a largura desejada */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 26px;
    color: teal;
    margin-top:10px;
    text-align: center;
    ::first-letter {
    text-transform: uppercase;
}
    z-index: 2;
`;
const Descricao = styled.h2`
  margin-left: 20px;
  margin-right: 20px;
  margin-top:10px;
  font-size: 15px;
  width: 400px;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Número máximo de linhas permitidas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2em; /* Espaçamento entre linhas */
  max-height: 2.4em; /* Altura máxima de duas linhas */
    z-index: 2;
`;
const Preco = styled.h2`
    color: #db1010;
    font-size: 20px;
    margin-right: 30px;
    align-self: flex-end;
    z-index: 2;
    
    margin-top:10px;
`;
const Rotulo = styled.div`
    margin-top: 5px;
    display: flex;
    align-items:center;
    flex-direction: column;
    width:450px;
`;

const Container =styled.div`
    
    flex-direction: column;
    margin: 5px;
    margin-bottom: 0.2rem;
    width: 98%;
    height: 500px;
    border: 2px solid teal;
    box-shadow: 0 0 4px rgba(0, 128, 128, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
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
      margin-top: 10px;
      border: 3px solid teal;
      
      width: 432px; /* Tamanho fixo da largura */
      height: 350px; /* Tamanho fixo da altura */
      object-fit: cover; /* Redimensiona a imagem mantendo a proporção */
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
        dispatch(adicionarProduto({ ...produto, quantidade }));
    }

  return (
    <Container>
        
        <div>
        <Imagem src ={produto.imagem}/>
        </div>
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
        <Rotulo>
        <Titulo>{produto.titulo}</Titulo>
        <Descricao>{produto.descricao}</Descricao>
        <Preco>R$ {produto.preco}</Preco>
        </Rotulo>
    </Container>
  )
}

export default Produto