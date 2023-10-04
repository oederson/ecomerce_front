import React from 'react'
import 'swiper/css';
// import Swiper bundle with all modules installed
import {Swiper, SwiperSlide} from 'swiper/react';
import { register } from "swiper/element/bundle"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

register();
// import styles bundle
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';

const data = [
    { id : "1", image: "/bannerpromo.png", link: ""},
    { id : "2", image: "/banner3.png", link: ""}
]
const Imagem = styled.img`
    width:1440px;
    height: 250px;
    object-fit: cover;
    @media screen and (max-width: 1000px){
      width: 100%;
      height: 170px;
      object-fit: cover;
    }
    

`;
const Container = styled.div`
    display:flex;
    width:80vw;
    max-width: 1440px;
    height: 250px;
    margin:0 auto;
    margin-top:-1px;
    align-items: flex-start;
    justify-content: center;
    @media screen and (max-width: 1000px){
      width: 100%;
      height:170px;
      }
`;

function Slider() {
  return (
    <Container>
        <Swiper
        slidesPerView={1}
        pagination={{ clickable: true}}
        navigation
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
            {data.map((item) => (
            <SwiperSlide key={item.id}>
                <Imagem
                src={item.image}
                alt='Slider'
                />
                {item.link &&
                    <button>Saiba Mais</button>}
            </SwiperSlide>))}
        </Swiper>
    </Container>
  )
}

export default Slider