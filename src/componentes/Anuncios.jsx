import React from 'react'
import styled from 'styled-components'

const Container1 = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;
const Container = styled.div`
    height: 30px;
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
    <div>
        <Container>
            Super oferta !! Entrega gratis em pedidos acima de R$50.00
        </Container>
    </div>
  )
}

export default Anuncios