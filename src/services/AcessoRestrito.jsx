import React from 'react'
import AlguemLogado from './AlguemLogado'
import SaberSeEAdm from './SaberSeEAdm'


const AcessoRestrito = (props) =>{ 
    if(AlguemLogado()){
      if(SaberSeEAdm){
      return(props.pagina)
    }else{
      return(<Home />)
    }
    };
};
    export default AcessoRestrito







