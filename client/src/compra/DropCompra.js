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

      <form>
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

      <button onClick={selectCompraID}>Detalhe por ID</button>
      <button onClick={deleteCompra}>Deletar por ID</button>

      <table>
        <tbody>
          <tr>
            <th>id_compra</th>
            <th>nme_produto</th>
            <th>dsc_produto</th>
            <th>preco_produto</th>
            <th>qtd_produto</th>
          </tr>
        </tbody>

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
