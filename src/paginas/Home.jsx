import React, { useCallback, useEffect } from 'react'
import Slider from '../componentes/Slider'
import Categorias from '../componentes/Categorias'
import Produtos from '../componentes/Produtos'
import Newsletter from '../componentes/Newsletter'
import Rodape from '../componentes/Rodape'


const Home = () => {
    
 return (
    <div>
        <Categorias/>
        <Slider/>
        <Produtos />
        <Newsletter/>
        <Rodape/>
    </div>
  )
}

export default Home
