import AlguemLogado from '../services/AlguemLogado';
import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { loginApi } from "../redux/apiChamada";
import { useDispatch } from "react-redux";
import ChamadaApi from "../services/metodoRequest.js";



const Container = styled.div`
    width: 100vw;
    height: 92.5vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("/fundo.jpg") center;
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
const Error = styled.span`
    color: red;
`;

const Cadastrar = () => { 
    const [loginExiste, setLoginExiste] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logado = AlguemLogado()
    const [usuario, setUsuario] = useState({
        login: "",
        nomeDeUsuario: "",
        email: "",
        senha: "",
        tipo: "false"
      }); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario((prevState) => ({ ...prevState, [name]: value }));
    };
    const fazOsubmit = async(e) => {
        e.preventDefault();
        try{
            await ChamadaApi().get(`/usuario/login/${usuario.login}`)
            await ChamadaApi().post("/usuario", usuario);
            const login = usuario.login;
            const senha = usuario.senha;
            loginApi(dispatch, { login , senha} )
            
        }catch{
            setLoginExiste(true)
        }
     };
 
    useEffect(() => {
       if (logado) {
        navigate('/'); 
        }
    }, [logado]);

  return (
    <Container>
        <Wrapper>
            <Titulo>Criar Conta</Titulo>
            <Formulario  className="formulario" onSubmit={fazOsubmit}>
                <Input 
                label="login"
                placeholder="nome"
                type="text"
                name="login"
                value={usuario.login}
                onChange={handleChange}
                required
                />
                <Input 
                label="nomeDeUsuario"
                placeholder="Nome de Usuario"
                type="text"
                name="nomeDeUsuario"
                value={usuario.nomeDeUsuario}
                onChange={handleChange}
                required
                />
                <Input 
                label="email"
                placeholder="E-mail"
                type="text"
                name="email"
                value={usuario.email}
                onChange={handleChange}
                required
                />
                <Input 
                label="senha"
                placeholder="Senha"
                type="text"
                name="senha"
                value={usuario.senha}
                onChange={handleChange}
                required
                />
                <Concordar>Criando uma conta estou ciente dos termos de utilização.Escrevendo mais um monte de coisas</Concordar>
                <Concordar>Vai ter que ter um eu nao sou robo aqui</Concordar>
                <Botao type="submit">Criar conta</Botao>
                {loginExiste && <Error>Login já existe ...</Error>}
            </Formulario>
        </Wrapper>
    </Container>
  )
}

export default Cadastrar