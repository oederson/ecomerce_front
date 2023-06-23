import { useSelector } from 'react-redux';

function PegaToken() {
  const TOKEN = useSelector(state => state.user.currentUser.token);
  return TOKEN;
}
export default PegaToken;
