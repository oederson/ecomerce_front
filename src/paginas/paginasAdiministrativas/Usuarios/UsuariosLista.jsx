import "./UsuariosLista.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ChamadaApi from "../../../services/metodoRequest.js";
import PegaToken from "../../../services/PegaToken";

const Botao = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;



export default function UsuarioListaAdm () {
  
  const token = PegaToken();
  const [data, setData] = useState([]);
  const [apagou, setApagou] = useState(1)
  const handleDelete = async(id) => {
    await ChamadaApi(token).delete(`/usuario/${id}`);
    setApagou(apagou + 1)
  };

  const columns = [
    { field: "id", 
      headerName: "ID", 
      width: 230 },
    {
      field: "login",
      headerName: "Login",
      width: 150,
      
    },
    { field: "nomeDeUsuario", 
    headerName: "Nome de usuario",
     width: 200,
    
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 180,
    },
    {
      field: "tipo",
      headerName: "Administrador",
      width: 110,
    },
    {
        field: "dataCriacao",
        headerName: "Data criação",
        width: 190,
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/produto/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  useEffect(()=>{
    const getProdutos = async () =>{
      try{
      const res = await ChamadaApi(token).get("/usuario")
      setData(res.data.content)
      }catch{}
  };getProdutos()
  },[apagou])

  return (
    <div className="productList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={1}
          checkboxSelection
          />
    </div>
  );
}