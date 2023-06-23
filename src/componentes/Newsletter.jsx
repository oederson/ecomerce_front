import { Send } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Titulo = styled.h1`
  font-size: 70px;
  margin-top: 0;
  margin-bottom: 20px;
`;
const Descricao = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Botao = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;


const Newsletter = () => {
  return (
    <Container>
      <Titulo>NewsLetter</Titulo>
      <Descricao>Tenha sempre as mais recentes novidades!</Descricao>
      <InputContainer>
        <Input placeholder='Seu e-mail'/>
        <Botao>
          <Send/>
        </Botao>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
