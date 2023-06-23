import styled from "styled-components"
import Newsletter from "../componentes/Newsletter";
import Rodape from "../componentes/Rodape";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { adicionarProduto } from "../redux/carrinhoRedux"
import ChamadaApi from "../services/metodoRequest.jsx";

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;

`;
const ImgConteudo = styled.div`
    flex:1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

`;
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`;
const Titulo = styled.h1`
    font-weight: 200;

`;
const Descricao = styled.p`
    margin: 20px 0px;
`;
const Preco = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FiltroConteudo = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const Filtro = styled.div`
    display: flex;
    align-items: center;
`;
const FiltroTitulo = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FiltroCor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FiltroSize = styled.select`
    margin-left: 10px;
    padding: 5px;

`;
const FiltroSizeOpcao = styled.option`

`;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-content: center;
    justify-content: space-between;
`;
const QuantidadeContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Quantidade = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Botao = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`;

const Produto = () => { 
    const localizacao = useLocation();
    const id =  localizacao.pathname.split("/")[2];
    const [produto, setProduto] = useState({});
    const [quantidade, setQuantidade] = useState(1);
    const [color, setColor] = useState("");
    const [tamanho, setTamanho] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduto = async () =>{
            try{
                const res = await ChamadaApi().get("/produto/id/"+id)
                setProduto(res.data);
            }catch{

            }
        };
        getProduto()
    },[id])

    const handleQuantidade = (type) =>{
        if(type === "dec"){
            quantidade > 1 && setQuantidade(quantidade-1)
        }else{
            setQuantidade(quantidade+1)
        }
    }
    
    const handleClick = () =>{
        dispatch(adicionarProduto({ ...produto, quantidade, color, tamanho }));
    }

  return (
    <Container>
        <Wrapper>
            <ImgConteudo>
            <Image src={produto.imagem}/>
            </ImgConteudo>
            <InfoContainer>
                <Titulo>{produto.titulo}</Titulo>
                <Descricao>{produto.descricao}</Descricao>
                <Preco>R${produto.preco}</Preco>
                <FiltroConteudo>
                    <Filtro>
                        <FiltroTitulo>Cor</FiltroTitulo>
                        {produto.color && produto.color.map((c) => (
                                 <FiltroCor color={c} key={c} onClick={()=>setColor(c)}/>
                            ))}
                    </Filtro>
                    <Filtro>
                        <FiltroTitulo>Tamanho</FiltroTitulo>
                        <FiltroSize onChange={(e) =>setTamanho(e.target.value)}>
                        {produto.tamanho && produto.tamanho.map((t) => (
                                <FiltroSizeOpcao key={t}>{t}</FiltroSizeOpcao>
                            ))}
                        </FiltroSize>
                    </Filtro>
                </FiltroConteudo>
                <AddContainer>
                    <QuantidadeContainer>
                        <Remove onClick = {()=> handleQuantidade("dec")} />
                        <Quantidade>{quantidade}</Quantidade>
                        <Add onClick = {()=> handleQuantidade("inc")}/>
                    </QuantidadeContainer>
                    <Botao onClick={handleClick}>Adicionar ao carrinho</Botao>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Rodape/>
    </Container>
  )
}

export default Produto