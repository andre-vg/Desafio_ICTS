import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../rotas/styles.css";

function ReadCompra() {
  const [listaCompra, setListaCompra] = useState([]);

  const selectNme = () => {
    Axios.get("http://localhost:3001/api/ReadCompras").then((response) => {
      setListaCompra(response.data);
    });
  };

  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <div className="updatediv">
        <br />
        <div className="d-grid col-2 align-content">
          <button onClick={selectNme} className="btn btn-outline-primary">
            Mostrar Compras
          </button>
          <br />
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Total</th>
            <th>Quantidade de Produtos</th>
            <th>Data da Compra</th>
            <th>Tipo de Pagamento</th>
            <th>Status</th>
          </tr>
        </thead>
        {listaCompra.map((val) => {
          return (
            <tbody>
              <tr>
                <td key="{id_compra}">{val.id_compra}</td>
                <td key="{total}">{val.total}</td>
                <td key="{qtd_produtos}">{val.qtd_produtos}</td>
                <td key="{dta_cad_compra}">{val.dta_cad_compra}</td>
                <td key="{tipo_pagamento}">{val.tipo_pagamento}</td>
                <td key="{status}">{val.status}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ReadCompra;
