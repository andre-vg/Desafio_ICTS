import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../rotas/styles.css";

function UpdateCompra() {
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
      <button onClick={selectNme}>Mostrar Todas Compras</button>
      <table>
        <tbody>
          <tr>
            <th>id_compra</th>
            <th>qtd_produtos</th>
            <th>dta_cad_compra</th>
            <th>tipo_pagamento</th>
            <th>status</th>
          </tr>
        </tbody>
        {listaCompra.map((val) => {
          return (
            <tbody>
              <tr>
                <td key="{id_compra}">{val.id_compra}</td>
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

export default UpdateCompra;
