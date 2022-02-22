import React, { useState } from "react";
import Axios from "axios";
import "./styles.css";

function Drop() {
  const [id_produto, setid_produto] = useState(0);
  const [newNme_produto, setNewnme_produto] = useState("");
  const [listaProduto, setListaProduto] = useState([]);

  const submitForm = () => {
    Axios.post("http://localhost:3001/api/getID", {
      newNme_produto: newNme_produto,
    }).then((response) => {
      setListaProduto(response.data);
    });
  };

  const deleteTabela = () => {
    if (
      window.confirm("Deseja deletar produto: " + id_produto + " ?") === false
    ) {
      return false;
    } else {
      return Axios.post("http://localhost:3001/api/delete", {
        id_produto: id_produto,
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
        <form className="crud-form">
          <label>Nome produto: </label>
          <input
            type="text"
            placeholder="Nome do Produto"
            name="newNme_produto"
            onChange={(event) => {
              setNewnme_produto(event.target.value);
            }}
            required
          />
          <br />

          <label>ID produto: </label>
          <input
            type="number"
            placeholder="ID"
            name="id_produto"
            min="0"
            onChange={(event) => {
              setid_produto(event.target.value);
            }}
            required
          />
          <br />
          <br />

          <div className="d-grid gap-1 col-2">
            <button onClick={submitForm} className="btn btn-secondary">
              Pesquisar por Nome
            </button>
            <button
              type="submit"
              onClick={deleteTabela}
              className="btn btn-outline-danger"
            >
              Deletar por ID
            </button>
          </div>
        </form>
        <br />
      </div>

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

export default Drop;
