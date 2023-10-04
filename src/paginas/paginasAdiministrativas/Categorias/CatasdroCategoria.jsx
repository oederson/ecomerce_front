import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom";
import ChamadaApi from "../../../services/metodoRequest.js";
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

const CadastroCategoria = () => {
  const token = PegaToken();
  const { id } = useParams();
  const irPara = useNavigate();
  const [categoria, setCategoria] = useState(""); 
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoria((prevState) => ({ ...prevState, [name]: value }));
  };
 
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(id){
      try{
        await ChamadaApi(token).put(`/categorias`, categoria);
        irPara("/adm/categorias")
        setCategoria("");}catch(error){
      }
    } else {
      try {
        
        await ChamadaApi(token).post('/categorias', categoria);
        irPara('/adm/categorias');
      } catch (error) {
        console.error(error);
      }
    } 
  };

    useEffect(() => {
      const fetchProduto = async () => {
        if (id) {
          try {
            const response = await ChamadaApi(token).get(`categorias/${id}`);
            const data = response.data;
            setCategoria(data);
        }catch(error){
          console.error(error);
        }
      }
    };fetchProduto();
  }, [id]);

  return (
    <Container className="containers">
      <Wrapper>
      {id? <h1 className="titulo">Editar Produto</h1> : <h1 className="titulo">Cadastro de Categoria</h1>}
      <Formulario className="formulario" onSubmit={handleSubmit}>
        <Input
            label="categoria"
            placeholder="Categoria"
            type="text"
            name="nome"
            value={categoria.nome}
            onChange={handleChange}
            required
        />
      {id? <Botao type="submit">Atualizar</Botao> : <Botao type="submit">Cadastrar</Botao>}
      </Formulario>
      </Wrapper>
    </Container>
  );
};

export default CadastroCategoria;
