import { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import usuarioReducer, { logout } from "../../redux/userReducer"
import {  persistor } from '../../redux/store';
import {  useNavigate } from 'react-router-dom';

const Deslogar = () => {
  const dispatch = useDispatch();
  const irPara = useNavigate();

  useEffect(() => {
    const logoutAndRedirect = async () => {
      dispatch(logout());
      await persistor.purge(usuarioReducer.currentUser);
      irPara("/");
    };

    logoutAndRedirect();
  }, [dispatch, irPara]);

  return null;
}

export default Deslogar;


