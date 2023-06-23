import styled from "styled-components"
import Produtos from "../componentes/Produtos";
import Newsletter from "../componentes/Newsletter";
import Rodape from "../componentes/Rodape";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`

`;
const Titulo = styled.h1`
    margin: 20px;
`;
const FiltroConteudo = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filtro = styled.div`
    margin: 20px;
`;
const FiltroTexto = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;
const Selecionar = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Opcao = styled.option`
    
`;
const ProdutosLista = () => {
 
    const localizacao = useLocation();
    const { searchQuery } = useParams();
    const categoria =  localizacao.pathname.split("/")[2,3];
    const [filtros, setFiltros] = useState({});
    const [sortProdutos, setSortProdutos] = useState("Novidades")
    const handleFiltros = (e) =>{
        const value = e.target.value;
        setFiltros({
            ...filtros,
            [e.target.name] : value,
        });
    };

  return (
   <Container>
        <Titulo>{categoria}</Titulo>
        <FiltroConteudo>
            <Filtro>
                <FiltroTexto>
                    Produtos filtrados:
                </FiltroTexto>
                <Selecionar name="color" defaultValue="cor" onChange={handleFiltros}>
                    <Opcao  value="cor"> Cor </Opcao>
                    <Opcao value="branco">Branco</Opcao>
                    <Opcao value="preto">Preto</Opcao>
                    <Opcao value="vermelho">Vermelho</Opcao>
                    <Opcao value="azul">Azul</Opcao>
                    <Opcao value="amarelo">Amarelo</Opcao>
                    <Opcao value="verde">Verde</Opcao>
                </Selecionar>
                <Selecionar name="tamanho" defaultValue="opt2" onChange={handleFiltros}>
                    <Opcao  value="opt1">
                        Tamanho
                    </Opcao>
                    <Opcao value="xs">XS</Opcao>
                    <Opcao value="s">S</Opcao>
                    <Opcao value="m">M</Opcao>
                    <Opcao value="l">L</Opcao>
                    <Opcao value="xl" >XL</Opcao>
                </Selecionar>
            </Filtro>
            <Filtro>
                <FiltroTexto>
                    Sort Produtos:
                </FiltroTexto>
                <Selecionar defaultValue="opt2" onChange={e=>setSortProdutos(e.target.value)}>
                    <Opcao value="novidades">Novidades</Opcao>
                    <Opcao value="crescente">Preço (asc)</Opcao>
                    <Opcao value="decrescente">Preço (desc)</Opcao>
                </Selecionar>
            </Filtro>
        </FiltroConteudo>
        <Produtos categoria={categoria} filtros={filtros} sortProdutos={sortProdutos} produtosNome={searchQuery}/>
        <Newsletter/>
        <Rodape/>
   </Container>
  )
}

export default ProdutosLista