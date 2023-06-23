import { Facebook, Instagram, Phone, Room, Twitter, YouTube, MailOutline } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Esquerda = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center= styled.div`
    flex:1;
    padding: 20px;
`;
const Direita = styled.div`
    flex:1;
    padding: 20px;
`;
const Titulo = styled.h3`
    margin-bottom: 30px;
`;
const Lista = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListaItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`;
const Logo = styled.h1`
    
`;
const Descricao = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
   display: flex;

`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const ContatoItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Pagamento = styled.img`
    width: 50%;
`;


const Rodape = () => {
  return (
    <Container>
        <Esquerda>
            <Logo>Ederson</Logo>
            <Descricao>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita inventore quam, nemo odit ut numquam a explicabo delectus corrupti provident amet repellat magni quidem exercitationem aspernatur 
                dolorem sapiente, soluta laboriosam?
            </Descricao>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/> 
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/> 
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/> 
                </SocialIcon>
                <SocialIcon color="E60023">
                    <YouTube/> 
                </SocialIcon>
            </SocialContainer>
        </Esquerda>
        <Center>
            <Titulo>
                Links úteis
            </Titulo>
            <Lista>
                <ListaItem>Home</ListaItem>
                <ListaItem>Carrinho</ListaItem>
                <ListaItem>Moda maculina</ListaItem>
                <ListaItem>Moda feminina</ListaItem>
                <ListaItem>Acessorios</ListaItem>
                <ListaItem>Minha conta</ListaItem>
                <ListaItem>Ver pedido</ListaItem>
                <ListaItem>Lista de desejos</ListaItem>
                <ListaItem>Lista de desejos</ListaItem>
                <ListaItem>Termos</ListaItem>
            </Lista>
        </Center>
        <Direita>
            <Titulo>Contato</Titulo>
            <ContatoItem>
                <Room style={{marginRight:"10px"}}/>Rua De terra sem número
            </ContatoItem>
            <ContatoItem>
                <Phone style={{marginRight:"10px"}}/> +55 14 3234 9090
            </ContatoItem>
            <ContatoItem>
                <MailOutline style={{marginRight:"10px"}}/> contato@eder.dev
            </ContatoItem>
            <Pagamento src="/pagamento.jpg"/>
        </Direita>
    </Container>
  )
}

export default Rodape