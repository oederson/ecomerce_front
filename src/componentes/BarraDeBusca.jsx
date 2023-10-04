import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Search } from '@mui/icons-material';

const Container = styled.div`
  display:flex;
  width: 100%;
  height: 40px;
  display: flex;
  border: 3px solid teal;
  align-items: center;
`;
const Input = styled.input`
    border: none;
    width: 95%;
    height: 30px;
    padding-left: 20px;
    outline: none;
    ::placeholder {
      
     
    font-size: 17px; 
    color:teal;
  }
`;


const Icone = styled.div`
    
   
    height: 40px;
    border-radius: 50%;
    color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 360px;
    font-size: 40;
    @media screen and (max-width: 1000px){
      color: white;
      }
`;

function BarraDeBusca() {

    const [searchQuery, setSearchQuery] = useState("");
    const irPara = useNavigate();
    const localizacaoo= useLocation();
    
    useEffect(() => { 
        const handleSearch = () => {
          if (searchQuery.length > 0 ) {
            irPara(`/produtos/${searchQuery}`);
          }
          if(searchQuery.length === 0 && localizacaoo.pathname.includes("produtos")){
            irPara(`/`);
          }
        };
        handleSearch();
        },[searchQuery]);
  return (
    <Container>
        <Input  placeholder="O que esta procurando ?" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
        <Search style={{ color: 'teal' }} />
    </Container>
  )
}

export default BarraDeBusca