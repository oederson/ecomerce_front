import styled from "styled-components"
import Produto  from "./Produto";
import { useEffect, useState } from "react";
import ChamadaApi from "../services/metodoRequest.js";

const Container =styled.div`
    width:100%;
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin:0 auto;
//    justify-content: space-between;
//    align-items: center;
    gap: 15px;
//    flex-wrap: wrap;
    max-width: 1480px;
    @media screen and (max-width: 1400px){
    grid-template-columns: 1fr 1fr;
    width:100%;
    padding: 10px;
    gap:10px;
    }
    @media screen and (max-width: 950px){
    grid-template-columns: 1fr;
    width:50%;
    padding: 10px;
    }
    
`;
const ImageWrapper = styled.div`
  flex: 1 0 50%;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;

const Produtos = ({categoria, filtros, sortProdutos, produtosNome}) => {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [nomeFiltro, setNomeFiltro] = useState("")
  const produtosPorNome = produtos.filter((produto) => produto.titulo.toLowerCase().includes(produtosNome));
  
  useEffect(()=>{
    const getProdutos = async ()=>{
      try{
        const res = await ChamadaApi().get(categoria ? `/produto/categoria/${categoria}`: `/produto/publico`);
        setProdutos(res.data.content)
      }catch(err){}
    };
    getProdutos()
  },[produtosNome]);
  
  useEffect(() => {
    const filtroPorNome = (item) => {
      if (!categoria && produtosNome) {
        const nomeProduto = item.titulo.toLowerCase();
        setNomeFiltro(produtosNome)
        return nomeProduto.includes(nomeFiltro);
      }
      return true;
    };
    categoria &&
      Array.isArray(produtos) &&
      setProdutosFiltrados(
        produtos.filter((produto) =>
          Object.entries(filtros).every(
            ([key, value]) => produto[key] && produto[key].includes(value)
          ) && filtroPorNome(produto)
        )
      );
  }, [produtos, categoria, filtros, produtosNome]);


/*  useEffect(() => {
    if(sortProdutos ==="novidades"){
      setProdutosFiltrados(prev =>
        [...prev].sort((a,b) =>a.createdAt - b.createdAt)
        );
    }else if(sortProdutos ==="crescente"){
      setProdutosFiltrados(prev =>
        [...prev].sort((a,b) =>a.preco - b.preco)
        );
    }else{
      setProdutosFiltrados(prev =>
        [...prev].sort((a,b) => b.preco - a.preco)
        );
    }
  }); */
  const definirExibicao = () => {
    if(categoria){
      return(
        <Container>
        {produtosFiltrados.map((item)=><Produto produto={item} key={item.id}/>)}
        </Container>
        )
    }
    if(produtosNome){
      return(
        <Container>
         {produtosPorNome.map((produto) => <Produto produto={produto} key={produto.id}/>)}
         </Container>
      )
    }
    else{
      return(
      <Container>  
        {produtos.map((produto) => <Produto produto={produto} key={produto.id}/>)}
      </Container>
      )
    }
  }

  return (definirExibicao())
}

export default Produtos