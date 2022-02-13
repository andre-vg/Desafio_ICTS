import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './styles.css';




function Read() {


  const [listaProduto, setListaProduto] = useState([]);

  const selectNme = () => {
      Axios.get('http://localhost:3001/api/get').then((response)=>{
        setListaProduto(response.data);
      });
  };
      
  return (

      

    <div className="App">

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" ></link>
        <button onClick={selectNme}>Mostrar Produtos</button>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>nme_produto</th>
              <th>dsc_produto</th>
              <th>preco_produto</th>
              <th>dta_cad_produto</th>
              <th>dta_mod_produto</th>
            </tr>
          </tbody>
        {listaProduto.map((val)=>{
            return(
              
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
              
            )            
        })}
        </table>   
    </div>
  );
}

export default Read;