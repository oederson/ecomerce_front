import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store.js";
import App from './App.jsx';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Cadastrar from './paginas/Cadatrar';
import Produto from './paginas/Produto';
import ProdutoLista from './paginas/ProdutosLista';
import Carrinho from './paginas/Carrinho';
import { PersistGate } from 'redux-persist/integration/react'
import Deslogar from './componentes/Deslogar/Deslogar.jsx';
import ProdutoListaAdm from './paginas/paginasAdiministrativas/ProdutoLista/ProdutoLista.jsx';
import NovoProduto from './paginas/paginasAdiministrativas/NovoProduto/NovoProduto.jsx';
import UsuarioLista from './paginas/paginasAdiministrativas/Usuarios/UsuariosLista.jsx';
import AlguemLogado from './services/AlguemLogado.jsx';
import SaberSeEAdm from './services/SaberSeEAdm.jsx';

const Main = () => {
  
  const acessoRestrito = (pagina) =>{ 
    if(AlguemLogado()){
      if(SaberSeEAdm){
      return(pagina)
    }else{
      return(<Home />)
    }}else{
      return(<Home />)
    }}

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element:<Login />,
        },
        {
          path: '/cadastrar',
          element: <Cadastrar/>,
        },
        {
          path: '/produto/:id',
          element: <Produto />,
        },
        {
          path: '/produtos/:searchQuery',
          element: <ProdutoLista />,
        },
        {
          path: '/produtos/categoria/:categoria',
          element: <ProdutoLista />,
        },
        {
          path: '/produtos',
          element: <ProdutoLista />,
        },
        {
          path: '/carrinho',
          element: <Carrinho />,
        },
        {
          path: '/deslogar',
          element: <Deslogar />, 
        },
        {
          path: '/adm/produtos',
          element: acessoRestrito(<ProdutoListaAdm />), 
        },
        {
          path: '/adm/cadastroproduto',
          element: acessoRestrito(<NovoProduto />),
        },
        {
          path: '/adm/cadastroproduto/:id',
          element: acessoRestrito(<NovoProduto />),
        },
        {
          path: '/adm/usuario',
          element: acessoRestrito(<UsuarioLista />),
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>
);
