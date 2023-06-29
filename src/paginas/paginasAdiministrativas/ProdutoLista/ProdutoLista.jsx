import "./ProdutoLista.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PegaToken from "../../../services/PegaToken";
import ChamadaApi from "../../../services/metodoRequest.js";

const Botao = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

export default function ProdutoListaAdm () {
  const [data, setData] = useState([]);
  const [apagou, setApagou] = useState(1)
  const token = PegaToken();
  const handleDelete = async(id) => {
    await ChamadaApi(token).delete(`/produto/${id}`);
    setApagou(apagou + 1)
  };

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.imagem} alt="" />
            {params.row.titulo}
          </div>
        );
      },
    },
    { field: "descricao", 
    headerName: "Descrição",
     width: 200,
    
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "preco",
      headerName: "Preço",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/adm/cadastroproduto/"+ params.row.id}>
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
      const res = await ChamadaApi(token).get("/produto")
      setData(res.data.content)
      }catch (error){
        console.error(error)
      }
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
        <Botao>
          <Link to="/adm/cadastroproduto" className="linkPersonalizado">Cadastar novo Produto</Link>
        </Botao>
    </div>
  );
}