import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './styles.css';




function Read() {


  const [listaProduto, setListaProduto] = useState([]);

  useEffect(()=>{
      Axios.get('http://localhost:3001/api/get').then((response)=>{
        setListaProduto(response.data)
      });
  },[]);


    

  return (

      

    <div className="App">

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" ></link>
        <table>
        <tr>
          <th>ID</th>
          <th>nme_produto</th>
          <th>dsc_produto</th>
          <th>preco_produto</th>
          <th>dta_cad_produto</th>
          <th>dta_mod_produto</th>
        </tr>

        {listaProduto.map((val)=>{
            return(
                      <tr>
                        <td>{val.id_produto}</td>
                        <td>{val.nme_produto}</td>
                        <td>{val.dsc_produto}</td>
                        <td>{val.preco_produto}</td>
                        <td>{val.dta_cad_produto}</td>
                        <td>{val.dta_mod_produto}</td>
                      </tr>
            )            
        })}
        </table>

      
    </div>
  );
}

export default Read;