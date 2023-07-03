import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
    border: none;
    flex: 1;
    padding-left: 20px;
    outline: none;
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
    <Input  placeholder="O que esta procurando ?" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
  )
}

export default BarraDeBusca