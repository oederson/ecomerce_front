import { Search,  ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled  from 'styled-components';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import DropDownMui from './DropDownMui/DropDownMui';
import { saberSeEadm } from '../services/saberSeEadm';
import AlguemLogado from '../services/AlguemLogado';
import SaberSeEAdm from '../services/SaberSeEAdm';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    ${mobile({ height: "50px"})}
`;
const Wrapper = styled.div`
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding : "10px 0px"})}
`;
const Esquerda = styled.div`
    width: 33.3%;
    display: flex;
    align-items: center;
    `;
const Linguagem = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display : "none"})}
    `;
const Procura = styled.div`
    width: 50vh;
    margin-left: 25px;
    padding: 5px;
    `;
const Input = styled.input`
    border: none;
    flex: 1;
    padding-left: 20px;
    outline: none;
    `;
const InputContainer = styled.div`
    width: 500px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 2px solid teal;
`;
const Icone = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 460px;
    font-size: 40;
`;
const Centro = styled.div`
    display: flex;
    width: 33.3vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    `;
const Logo = styled.h1`
    font-weight: bold;
    `;
const Direita = styled.div`
    width: 33.3%;
    flex-direction: row;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    `;
const ItemMenu = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    `;
const Titulo = styled.h3`
color: teal;

font-weight: bold;
   text-shadow: 0.5px 1px 0.5px #014d1a;

`;

const NavBar = () => {
    
    const irPara = useNavigate(); 
    const quantidade = useSelector(state => state.carrinho.quantidade);
    const [searchQuery, setSearchQuery] = useState("");
    const eAdm = SaberSeEAdm();
    const nomeDeUsuario = saberSeEadm(useSelector(state => state.user.currentUser), "nomeDeUsuario")
    useEffect(() => { 
        const handleSearch = () => {
          if (searchQuery.length > 0 ) {
            irPara(`/produtos/${searchQuery}`);
          }
          if (searchQuery.length === 0 ) {
            irPara(`/`);
          }};
        handleSearch();
        },[searchQuery]);
    
    const oQueFazerNaBarraDeNagevacao = () => {
        if(AlguemLogado()){
            return(<Container>
                        <Wrapper>
                           <Esquerda>
                             <Logo>Sua Logomarca aqui!</Logo>
                           </Esquerda>
                            <Centro>
                                <Procura>
                                    <InputContainer>
                                        <Input placeholder="O que esta procurando ?" 
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}/>
                                 
                                    </InputContainer>
                                </Procura>
                                <Icone>
                                    <Search />
                                </Icone>
                            </Centro>
                            <Direita>
                                <ItemMenu>
                                    <Link to="/carrinho" style={{ textDecoration: 'none' }}>
                                         <Badge badgeContent={quantidade} color="primary">
                                         <ShoppingCartOutlined style={{ color: 'teal' }} />
                                         </Badge>
                                    </Link>
                                </ItemMenu>
                                <div >
                                    <DropDownMui nomeDeUsuario={nomeDeUsuario} usuarioAdm={eAdm} />
                                </div> 
                            </Direita>
                        </Wrapper> 
                    </Container>)
            }else{
    return(<Container>
                <Wrapper>
                    <Esquerda>
                        <Logo>Sua Logomarca aqui!</Logo>                            
                </Esquerda>
                    <Centro>
                        <Procura>
                            <InputContainer>
                                <Input placeholder="O que esta procurando ?" 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}/>              
                                </InputContainer>
                        </Procura>
                            <Icone>
                                <Search />
                            </Icone>
                        </Centro>
                    <Direita>
                        <ItemMenu>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                               <Titulo> Login </Titulo> 
                            </Link>
                        </ItemMenu>
                        <ItemMenu>
                            <Link to="/cadastrar" style={{ textDecoration: 'none' }}>
                            <Titulo>  Cadastrar </Titulo>
                                </Link>
                            </ItemMenu>
                        <ItemMenu>
                            <Link to="/carrinho" style={{ textDecoration: 'none' }}>
                                <Badge badgeContent={quantidade} color="primary">
                                    <ShoppingCartOutlined style={{ color: 'teal' }} />
                                </Badge>
                            </Link>
                        </ItemMenu>
                    </Direita>
                </Wrapper> 
            </Container>)
        }
}
    
  return (oQueFazerNaBarraDeNagevacao())
}

export default NavBar