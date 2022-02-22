import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function Read() {
  const [listaProduto, setListaProduto] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      setListaProduto(response.data);
    });
  }, []);

  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nome Produto</th>
            <th>Descrição Produto</th>
            <th>Preço Produto</th>
            <th>Data Cadastro</th>
            <th>Data Alteração</th>
          </tr>
        </thead>
        {listaProduto.map((val) => {
          return (
            <tbody>
              <tr>
                <td key="{id_produto}">{val.id_produto}</td>
                <td key="{nme_produto}">{val.nme_produto}</td>
                <td key="{dsc_produto}">{val.dsc_produto}</td>
                <td key="{preco_produto}">{val.preco_produto}</td>
                <td key="{dta_cad_produto}">{val.dta_cad_produto}</td>
                <td key="{dta_mod_produto}">{val.dta_mod_produto}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Read;
