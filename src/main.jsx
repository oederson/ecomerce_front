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
import AcessoRestrito from './services/AcessoRestrito.jsx';

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
          path: 'login',
          element:<Login />,
        },
        {
          path: 'cadastrar',
          element: <Cadastrar/>,
        },
        {
          path: 'produto/:id',
          element: <Produto />,
        },
        {
          path: 'produtos/:searchQuery',
          element: <ProdutoLista />,
        },
        {
          path: 'produtos/categoria/:categoria',
          element: <ProdutoLista />,
        },
        {
          path: 'produtos',
          element: <ProdutoLista />,
        },
        {
          path: 'carrinho',
          element: <Carrinho />,
        },
        {
          path: 'deslogar',
          element: <Deslogar />, 
        },
        {
         path: 'adm/produtos',
          element: <AcessoRestrito pagina={<ProdutoListaAdm/>}/>,        
        },
        {
          path: 'adm/cadastroproduto',
          element: <AcessoRestrito pagina={<NovoProduto />}/>,
        },
        {
          path: 'adm/cadastroproduto/:id',
          element: <AcessoRestrito pagina={<NovoProduto />}/>,
        },
        {
          path: 'adm/usuario',
          element:  <AcessoRestrito pagina={<UsuarioLista />} />,
        },
      ],
    },
  ]
);


ReactDOM.createRoot(document.getElementById('root')).render( 
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
