import { useEffect, useState } from "react";
import styled from "styled-components"
import { loginApi } from "../redux/apiChamada";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("../public/login.jpg") center;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

`;
const Titulo = styled.h1`
    font-size: 24px;
    font-weight: 300;

`;
const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Botao = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;
const Linka = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;
const Error = styled.span`
    color: red;
`;

const Login = () => {

    const {isFetching,error} = useSelector((state => state.user));
    const [login, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const dispatch = useDispatch();
    const userRedux = useSelector(state => state.user.logado);
    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        await loginApi(dispatch, { login, senha})
        };
      
    useEffect(() => {
        if (userRedux) {
        navigate('/'); // Redireciona para a rota desejada após o login
        }
    }, [userRedux]);
    
  return (
    <Container>
    <Wrapper>
        <Titulo>Entrar</Titulo>
        <Formulario>
            <Input 
            placeholder="Nome de usuario" 
            onChange={(e)=>setUsuario(e.target.value)}
            />
            <Input 
            placeholder="senha"
            type="password"
            autocomplete="current-password" 
            onChange={(e)=>setSenha(e.target.value)}
            />
            <Botao onClick={handleClick} disabled={isFetching}>Entrar</Botao>
            {error && <Error>Algo deu errado...</Error>}
            <Linka>Esqueceu a senha ?</Linka>
            <Linka>Criar nova conta</Linka>
            <Linka>Vai ter que ter um eu nao sou robo</Linka>
        </Formulario>
    </Wrapper>
</Container>
  )
}

export default Login