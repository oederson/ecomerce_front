import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../dados';


const Container = styled.div`
    width: 100vw;
    height: 40vh;
    display: flex;
    position: relative;
    overflow: hidden;
    
    background-image: linear-gradient(45deg, #1976d2, #3bb077);
    background-size: 500% 100%;
    animation: primeira-div 2s  infinite alternate ;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f3f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 80%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);  
`;
const Slide = styled.div`
    width: 100vw;
    height: 40vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    width: 100vh;
    height:40vh;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 90px;
`;
const Titulo = styled.h1`
    font-size: 70px;
`;
const Descricao= styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;  
`;
const Botao = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex]= useState(0)
    const handleClick = (direction) => {
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 :0)
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}> 
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>( 
            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Titulo> {item.titulo}</Titulo>
                    <Descricao> {item.descricao}</Descricao>
                    <Botao> Ver agora  </Botao>
                </InfoContainer>
            </Slide>
            ))};
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider