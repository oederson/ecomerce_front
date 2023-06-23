import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom";
import ChamadaApi from "../../../services/metodoRequest.jsx";
import PegaToken from "../../../services/PegaToken";


const Container = styled.div`
    width: 100vw;
    height: 92.9vh;
    background: #000000;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;

`;
const Titulo = styled.h1`
    font-size: 24px;
    font-weight: 300;

`;
const Formulario = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Concordar = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Botao = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;
const ParteCheckBox = styled.div`
 display: flex;
 width: 800px;
 justify-content: space-around;
 margin-top: 10px;
`;

const NovoProduto = () => {
  const token = PegaToken()
  const { id } = useParams();
  const irPara = useNavigate();
  const [produto, setProduto] = useState({
    titulo: "",
    descricao: "",
    imagem: "",
    categoria:[],
    tamanho: [],
    color: [],
    preco: "",
  }); 
  
  const checkboxMudou = (event, key) => {
    const { value, checked } = event.target;
    setProduto((prevState) => ({
      ...prevState,
      [key]: checked
        ? [...prevState[key], value]
        : prevState[key].filter((item) => item !== value),
    }));
  }; 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prevState) => ({ ...prevState, [name]: value }));
  };
 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduto((prevState) => ({ ...prevState, imagem: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(id){
      try{
        await ChamadaApi(token).put(`/produto`, produto);
        irPara("/adm/produtos")
        setProduto({
        titulo: "",
        descricao: "",
        imagem: "",
        categoria:[],
        tamanho: [],
        color: [],
        preco: "",
      });}catch(error){
  
      }
    }else{
      try{
        await ChamadaApi(token).post("/produto", produto);
        irPara("/adm/produtos")
        setProduto({
          titulo: "",
          descricao: "",
          imagem: "",
          categoria:[],
          tamanho: [],
          color: [],
          preco: "",
    });}catch(error){

    }}
  };
  useEffect(() => {
    const fetchProduto = async () => {
      if (id) {
        try {
          const response = await ChamadaApi(token).get(`produto/id/${id}`);
          const data = response.data;
          setProduto(data);
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    fetchProduto();
  }, [id]);

  return (
    
    <Container className="containers">
      <Wrapper>

      {id? <h1 className="titulo">Editar Produto</h1> : <h1 className="titulo">Cadastro de Produto</h1>}
      <Formulario className="formulario" onSubmit={handleSubmit}>
        <Input
            label="titulo"
            placeholder="Titulo"
            type="text"
            name="titulo"
            value={produto.titulo}
            onChange={handleChange}
            required
        />
        <Input
            label = "descrição"
            placeholder="Descrição"
            type="text"
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
            required
        />

        <ParteCheckBox>
        <label>
          <h3>Categorias:</h3>
          
          <label>
            <input
              
              type="checkbox"
              value="masculino"
              onChange={(event) => checkboxMudou(event, "categoria")}
              checked={produto.categoria.includes("masculino")}
            />
            Maculino
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="feminino"
              onChange={(event) => checkboxMudou(event, "categoria")}
              checked={produto.categoria.includes("feminino")}
            />
            Feminina
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="jeans"
              onChange={(event) => checkboxMudou(event, "categoria")}
              checked={produto.categoria.includes("jeans")}
            />
            Jeans
          </label>
          
        </label>
        <br />

          <label>
          <h3>Cores:</h3>
          
          <label>
            <input
              type="checkbox"
              value="branco"
              onChange={(event) => checkboxMudou(event, "color")}
              checked={produto.color.includes("branco")}
            />
            Branco
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="preto"
             
              onChange={(event) => checkboxMudou(event, "color")}
              checked={produto.color.includes("preto")}
            />
            Preto
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="vermelho"
              
              onChange={(event) => checkboxMudou(event, "color")}
              checked={produto.color.includes("vermelho")}
            />
            Vermelho
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="azul"
              
              onChange={(event) => checkboxMudou(event, "color")}
              checked={produto.color.includes("azul")}
            />
            Azul
          </label>
          <label>
          <br />
            <input
              type="checkbox"
              value="amarelo"
              
              onChange={(event) => checkboxMudou(event, "color")}
              checked={produto.color.includes("amarelo")}
            />
            Amarelo
          </label>
          <label>
          <br />
            <input
              type="checkbox"
              value="verde"
              
              onChange={(event) => checkboxMudou(event, "color")}
              checked={produto.color.includes("verde")}
            />
            Verde
          </label>
          
        </label>
        <br />
        <label>
          <h3>Tamanho:</h3>
          <label>
            <input
              type="checkbox"
              value="X"
              onChange={(event) => checkboxMudou(event, "tamanho")}
              checked={produto.tamanho.includes("X")}
            />
            X
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="XS"
             
              onChange={(event) => checkboxMudou(event, "tamanho")}
              checked={produto.tamanho.includes("XS")}
            />
            XS
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="L"
              
              onChange={(event) => checkboxMudou(event, "tamanho")}
              checked={produto.tamanho.includes("L")}
            />
            L
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="S"
              
              onChange={(event) => checkboxMudou(event, "tamanho")}
              checked={produto.tamanho.includes("S")}
            />
            S
          </label>
        </label>
        <br />
        </ParteCheckBox>
        
        <Input
            label="preco"
            placeholder="Preço"
            type="number"
            name="preco"
            value={produto.preco}
            onChange={handleChange}
            required
          />


        {id?<div>
          <label className="label">Imagem:</label>
          <Input
            type="file"
            name="imagem"
            onChange={handleImageChange}
          />
          {produto.imagem && (
            <img src={produto.imagem} alt="Produto" style={{ width: "200px", height: "200px" }} />
          )}
          </div> : <div>
          <label className="label">Imagem:</label>
          <Input
            type="file"
            name="imagem"
            
            onChange={handleImageChange}
            required
          />
          {produto.imagem && (
            <img src={produto.imagem} alt="Produto" style={{ width: "200px", height: "200px" }} />
          )}
        </div> }
        {id? <Botao type="submit">Atualizar</Botao> : <Botao type="submit">Cadastrar</Botao>}
      </Formulario>
      </Wrapper>
    </Container>
  );
};

export default NovoProduto;
