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
    flex: 1;
    display: flex;
    align-items: center;
    `;
const Linguagem = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display : "none"})}
    `;
const Procura = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    `;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    outline: none;
    `;
const InputContainer = styled.div`
    width: 80%;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 2px solid black;
`;
const Centro = styled.div`
    display: flex;
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
    `;
const Logo = styled.h1`
    font-weight: bold;
    `;
const Direita = styled.div`
    flex: 1;
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
            return( <Container>
                        <Wrapper>
                            <Esquerda>
                                
                            <Logo>Sua Logomarca aqui!</Logo>
                            </Esquerda>
                            <Centro>
                            <Procura>
                                <InputContainer>
                                <Input placeholder="Procurar" 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}/>
                                    <Search style={{color:"black", fontSize:40}}/>
                                    </InputContainer>
                                </Procura>
                                
                            </Centro>
                            <Direita>
                                <ItemMenu>
                                    <Link to="/carrinho">
                                         <Badge badgeContent={quantidade} color="primary">
                                         <ShoppingCartOutlined/>
                                         </Badge>
                                    </Link>
                                </ItemMenu>
                                <ItemMenu>
                                    <DropDownMui nomeDeUsuario={nomeDeUsuario} usuarioAdm={eAdm} />
                                </ItemMenu> 
                            </Direita>
                        </Wrapper> 
                    </Container>

                )
            }else{
    return(<Container>
                <Wrapper>
                    <Esquerda>
                    <Logo>Sua Logomarca aqui!</Logo>
                            
                    </Esquerda>
                    <Centro>
                    
                        <InputContainer>
                            <Input placeholder="Procurar" 
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)}/>
                            
                            </InputContainer>
                            <Search style={{color:"gray", fontSize:16}}/>
                            
                            
                    </Centro>
                    <Direita>
                        <ItemMenu>
                            <Link to="/login">
                                Login
                            </Link>
                        </ItemMenu>
                        <ItemMenu>
                            <Link to="/cadastrar">
                                Cadastrar
                                </Link>
                            </ItemMenu>
                        <ItemMenu>
                            <Link to="/carrinho">
                                <Badge badgeContent={quantidade} color="primary">
                                    <ShoppingCartOutlined/>
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