import { Search,  ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import styled  from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DropDownMui from './DropDownMui/DropDownMui';
import { saberSeEadm } from '../services/saberSeEadm';
import AlguemLogado from '../services/AlguemLogado';
import SaberSeEAdm from '../services/SaberSeEAdm';
import BarraDeBusca from './BarraDeBusca';
import Categorias from './Categorias';


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
@media screen and (max-width: 1000px){
      width: 100%;
}
    
`;
const Wrapper = styled.div`
    width: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;
const Esquerda = styled.div`
    width: 33.3%;
    height: 30px;
    display: flex;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 0px;
    `;
const Linguagem = styled.span`
    font-size: 14px;
    cursor: pointer;
    `;
const Procura = styled.div`
    width: 50%;
    margin-top: 5px;
    margin-left: 25px;
    padding: 5px;
    `;
const InputContainer = styled.div`
    width: 200%;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right:200px;

    border: 2px solid teal;
`;
const Icone = styled.div`
    position: absolute;

    height: 40px;
    border-radius: 50%;
    color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 460px;
    font-size: 40;
    @media screen and (max-width: 1000px){
      color: white;
      }
`;
const Centro = styled.div`
    display: flex;
    width: 33.3%;
    text-align: center;
    align-items: center;
    justify-content: center;
    `;
const Logo = styled.h1`
    color: #008080;
    font-weight: bold;
    text-shadow: 1px 2px 2px #0a0a0a;
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
    font-size: 20px;
    font-weight: bold;
    text-shadow: 0.5px 1px 0.5px #014d1a;
    @media screen and (max-width: 750px){
        font-size:14px;
      }
`;
const Logomarca = styled.img`
    width: 300px;
    height: 90px;
    @media screen and (max-width: 1000px){
      width: 200px;
      height: 55px;
      }
`;

const NavBar = () => {
    
    
    const quantidade = useSelector(state => state.carrinho.quantidade);
   
    const eAdm = SaberSeEAdm();
    const nomeDeUsuario = saberSeEadm(useSelector(state => state.user.currentUser), "nomeDeUsuario")
    
    
    const oQueFazerNaBarraDeNagevacao = () => {
        if(AlguemLogado()){
            return(<Container>
                        <Wrapper>
                           <Esquerda>
                            <Link to= "/" style={{ textDecoration: 'none' }}>
                            <Logomarca src='/LOGOMARCATESTE.png' alt='LOGO'/>
                             </Link>
                           </Esquerda>
                            <Centro>                                
                                <BarraDeBusca/>                               
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
                        <Categorias/> 
                        <hr/>  
                    </Container>)
            }else{
    return(<Container>
                <Wrapper>
                    <Esquerda>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                        <Logomarca src='/LOGOMARCATESTE.png' alt='LOGO'/>
                        </Link>                           
                </Esquerda>
                    <Centro>                       
                        <BarraDeBusca/>                    
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
                <Categorias/>
                <hr/>  
            </Container>)
        }
}
    
  return (oQueFazerNaBarraDeNagevacao())
}

export default NavBar