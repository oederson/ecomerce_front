import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom";
import ChamadaApi from "../../../services/metodoRequest.js";
import PegaToken from "../../../services/PegaToken";
import axios from "axios";

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
  const [categorias, setCategorias ] = useState([]);
  const [formData, setFormData] = useState(null);
  const token = PegaToken();
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
    const newFormData = new FormData();
    newFormData.append('file', file);
    newFormData.append('upload_preset', 'p2xppgif');
    setFormData(newFormData);
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
    } else {
      try {
        
        await ChamadaApi(token).post('/produto', produto);
        irPara('/adm/produtos');

      } catch (error) {
        console.error(error);
      }
    }
  
  };

    const uploadImage = async () => {
      try {
        const res = axios.post(
          "https://api.cloudinary.com/v1_1/dsqvsavze/image/upload", formData)
          .then((response) => setProduto(
            (prevState)=>({ ... prevState,imagem: response.data.secure_url})))
      } catch (error) {
        console.error(error);
      }
    };
      
    useEffect(() => {
      const fetchProduto = async () => {
        if (id) {
          try {
            const response = await ChamadaApi(token).get(`produto/id/${id}`);
            const data = response.data;
            setProduto(data);
        }catch(error){
          console.error(error);
        }
      }
    };fetchProduto();
  }, [id]);
  useEffect(()=>{
    const getCategorias = async ()=>{
      try{
        const res = await ChamadaApi().get(`/categorias`);
        setCategorias(res.data.content)
        console.log(res)
      }catch(err){}
    };
    getCategorias()
  },[]);

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
          {categorias.map(item=>(
            <><input           type="checkbox"
            value={item.nome}
            onChange={(event) => checkboxMudou(event, "categoria")}
            
          />{item.nome}
        <br />
          </>
            ))}

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


        
        {id? <Botao type="submit">Atualizar</Botao> : <Botao type="submit">Cadastrar</Botao>}
      </Formulario>
      {id?<div>
          <label className="label">Imagem:</label>
          <Input
            type="file"
            name="imagem"
            onChange={handleImageChange }
          />
          {produto.imagem && (
            <img src={produto.imagem} alt="Produto" style={{ width: "200px", height: "200px" }} />
          )}
          </div> : <div>
          <label className="label">Imagem:</label>
          <Input
            type="file"
            name="imagem"
            
            onChange={handleImageChange }
            required
          />
          {produto.imagem && (
            <img src={produto.imagem} alt="Produto" style={{ width: "200px", height: "200px" }} />
          )}
        </div> }
        <button onClick={uploadImage}> Upload cloudnary teste</button>
      </Wrapper>
    </Container>
  );
};

export default NovoProduto;

/*<label>
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
</label>*/

