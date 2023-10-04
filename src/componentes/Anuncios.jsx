import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    width: 100%;
    background-image: linear-gradient(45deg, #1976d2, #3bb077);
    background-size: 500% 100%;
    animation: primeira-div 2s  infinite alternate ;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;

    @keyframes primeira-div {
      0%{
        background-position-x: 0%;
      }
      100%{
        background-position-x: 100%;
      }
      
    }

`;


const Anuncios = () => {
  return (
    
        <Container>
            Estamos no horário de entregas, não perca tempo compre já! 
        </Container>
    
  )
}

export default Anuncios