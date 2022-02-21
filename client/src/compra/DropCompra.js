import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../rotas/styles.css";

function DropCompra() {
  const [listaCompra, setListaCompra] = useState([]);
  const [compraDetalhe, setCompraDetalhe] = useState([]);
  const [id_compra, setid_compra] = useState(0);

  const selectCompraID = () => {
    Axios.post("http://localhost:3001/api/ReadComprasID", {
      id_compra: id_compra,
    }).then((response) => {
      setCompraDetalhe(response.data);
    });
  };

  const deleteCompra = () => {
    if (window.confirm("Deseja deletar compra: " + id_compra + " ?") == false) {
      return false;
    } else {
      return Axios.post("http://localhost:3001/api/deleteCompra", {
        id_compra: id_compra,
      }).then(() => {});
    }
  };

  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>

      <div className="updatediv">
        <br />
        <form>
          <label>ID da compra: </label>
          <input
            type="number"
            placeholder="ID da compra"
            name="id_compra"
            min="0"
            onChange={(event) => {
              setid_compra(event.target.value);
            }}
          />
        </form>

        <div className="d-grid gap-1 col-2">
          <button onClick={selectCompraID} className="btn btn-secondary">
            Detalhe por ID
          </button>
          <button
            type="submit"
            onClick={deleteCompra}
            className="btn btn-outline-danger"
          >
            Deletar por ID
          </button>
        </div>
        <br />
      </div>

      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nome Produto</th>
            <th>Descrição Produto</th>
            <th>Preço Produto</th>
            <th>Quantidade</th>
          </tr>
        </thead>

        {compraDetalhe.map((value) => {
          return (
            <tbody>
              <tr>
                <td key="{cod_compra}">{value.cod_compra}</td>
                <td key="{nme_produto}">{value.nme_produto}</td>
                <td key="{dsc_produto}">{value.dsc_produto}</td>
                <td key="{preco_produto}">{value.preco_produto}</td>
                <td key="{qtd_produto}">{value.qtd_produto}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default DropCompra;
