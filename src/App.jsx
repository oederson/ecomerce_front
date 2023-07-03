import { Outlet, useLocation } from "react-router-dom";
import Anuncios from "./componentes/Anuncios";
import NavBar from "./componentes/NavBar";


function App() {
  const localizacao = useLocation();
  const comportamentoNavBar = () => {
    if (localizacao.pathname === "/login" || localizacao.pathname === "/cadastrar") {
      return (
        <div className="container">
          <Anuncios />
          <Outlet />
        </div>
      );
    } else {
      return (
        <div className="container">
          <Anuncios />
          <NavBar />
          <Outlet />
        </div>
      );
    }
  };

  return (comportamentoNavBar())
}

export default App;
