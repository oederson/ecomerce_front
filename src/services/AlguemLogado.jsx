import { useSelector } from 'react-redux';

function AlguemLogado() {
    const alguemLogado = useSelector(state => state.user.logado);
  return (alguemLogado)
}

export default AlguemLogado