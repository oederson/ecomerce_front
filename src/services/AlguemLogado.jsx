import { useSelector } from 'react-redux';

const  AlguemLogado = () => {
    const alguemLogado = useSelector(state => state.user.logado);
  return (alguemLogado)
}

export default AlguemLogado