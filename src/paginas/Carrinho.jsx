import React, { useEffect, useState } from 'react'
import Rodape from '../componentes/Rodape'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import Divider from '@mui/material/Divider';
import { limparCarrinhoo , removerProduto, aumentarQuantidade, diminuirQuantidade } from '../redux/carrinhoRedux'
import { Link } from 'react-router-dom'

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
`;
const Titulo = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Topo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopoBotao = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;
const TopoTextos = styled.div``;
const TopoTexto = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;
const EmBaixo = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;
const Produto = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const ProdutoDetalhes = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`;
const Detalhes = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProdutoNome = styled.span``;
const ProdutoId = styled.span``;
const ProdutoCor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;
const ProdutoSize = styled.span``;
const PrecoDetalhes = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProdutoQuantidadeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProdutoQuantidade = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProdutoPreco = styled.div`
    font-size: 30px;
    font-weight: 200;
`;
const Hr = styled.hr`
    background-color: #0e0d0d;
    border: none;
    height: 1px;
`;
const Resumo = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const ResumoTitulo = styled.h1`
    font-weight: 200;    
   
`;
const ResumoItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;
const ResumoItemTexto = styled.span`
    
   
`;
const ResumoItemPreco = styled.span`
    
   
`;
const ResumoBotao = styled.button`
    width: 100%;
    padding: 10px;
    background-color: teal;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;
const ResumoBotaolimpar = styled.button`
    margin-top: 170px;
    width: 100%;
    padding: 10px;
    background-color: #424141;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Carrinho = () => { 
    const dispatch = useDispatch(); 
    const [apagou , setApagou] = useState(0)
    const carrinho = useSelector(state => state.carrinho);
    const limparCarrinho =  () => {
        dispatch(limparCarrinhoo()); 
        setApagou(apagou + 1)
    };
    const removerProdutoo = (produtoId) => {
      dispatch(removerProduto(produtoId));
      setApagou(apagou +1)
    };
    const handleQuantidade = (type, id) =>{
        if(type === "dec"){
            dispatch(aumentarQuantidade(id))
            setApagou(apagou +1) 
        }else{
            dispatch(diminuirQuantidade(id))
            setApagou(apagou +1)
        }
    }
    useEffect(() => {}, [apagou]);
    
    return (
    <Container>
        <Divider/>
        <Wrapper>
            <Titulo>Sua sacola</Titulo>
            <Topo>
                <Link to="/"> 
                <TopoBotao>Continue comprando</TopoBotao>
                </Link>
                <TopoTextos>
                    <TopoTexto>Sacola de compras (2)</TopoTexto>
                    <TopoTexto>Sua lista de desejos (0)</TopoTexto>
                </TopoTextos>
                <TopoBotao type="filled">Pagar agora</TopoBotao>
            </Topo>
            <EmBaixo>
                <Info>
                {carrinho.produtos.map(produto=>(
                <Produto key={produto.id}>
                        <ProdutoDetalhes>
                            <Image src={produto.imagem}/>
                            <Detalhes>
                                <ProdutoNome><b>Produto : </b>{produto.titulo}</ProdutoNome>
                                <ProdutoId><b>ID :</b> {produto.id} </ProdutoId>
                                <b>Cor :</b><ProdutoCor color={produto.color}/>
                                <ProdutoSize><b>Tamanho :</b> {produto.tamanho} </ProdutoSize>
                                <TopoBotao onClick={() => removerProdutoo(produto.id)}> Remover do carrinho </TopoBotao>
                            </Detalhes>
                            
                        </ProdutoDetalhes>
                        
                        <PrecoDetalhes>
                            <ProdutoQuantidadeContainer>
                                <Remove onClick = {()=> handleQuantidade("inc", produto.id)}/>
                                <ProdutoQuantidade>{produto.quantidade}</ProdutoQuantidade>
                                <Add onClick = {()=> handleQuantidade("dec", produto.id)} />
                            </ProdutoQuantidadeContainer>
                            <ProdutoPreco>R$ {produto.preco * produto.quantidade}</ProdutoPreco>
                        </PrecoDetalhes>
                        
                    </Produto>))}
                </Info>
                <Resumo>
                    <ResumoTitulo>Resumo pedido</ResumoTitulo>
                    <ResumoItem>
                        <ResumoItemTexto>Subtotal</ResumoItemTexto>
                        <ResumoItemPreco>R$ {carrinho.total}</ResumoItemPreco>
                    </ResumoItem>
                    <ResumoItem>
                        <ResumoItemTexto>Frete estimado</ResumoItemTexto>
                        <ResumoItemPreco>R$ 9</ResumoItemPreco>
                    </ResumoItem>
                    <ResumoItem>
                        <ResumoItemTexto>Desconto de entrega</ResumoItemTexto>
                        <ResumoItemPreco>R$ -9</ResumoItemPreco>
                    </ResumoItem>
                    <ResumoItem type="total">
                        <ResumoItemTexto>Total</ResumoItemTexto>
                        <ResumoItemPreco>R$ {carrinho.total}</ResumoItemPreco>
                    </ResumoItem>
                    <ResumoBotao>Comprar agora</ResumoBotao>
                    <ResumoBotaolimpar onClick={() => {limparCarrinho()}}>Limpar carrinho</ResumoBotaolimpar>
                </Resumo>
                
            </EmBaixo>
        </Wrapper>
        <Rodape/>
    </Container>
  )
}

export default Carrinho
