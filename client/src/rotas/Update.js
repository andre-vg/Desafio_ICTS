import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './styles.css';

function Update() {

  const [nme_produto, setnme_produto]= useState('');
  const [id_produto, setid_produto]= useState((0));
  const [newNme_produto, setNewnme_produto]= useState('');
  const [dsc_produto, setdsc_produto]= useState('');
  const [preco_produto, setpreco_produto]= useState('');
  const [listaProduto, setListaProduto] = useState([]);

  const submitForm = () =>{
    Axios.post('http://localhost:3001/api/getID', {
      newNme_produto: newNme_produto
    }).then((response)=>{
      setListaProduto(response.data);
    })
  };

  const updateTabela = () =>{
    Axios.post('http://localhost:3001/api/update', {
      newNme_produto: newNme_produto,
      dsc_produto: dsc_produto,
      preco_produto: preco_produto,
      id_produto: id_produto
    }).then(()=>{
      alert("update");
    })
  };

  return (

      

    <div className="App">       
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" ></link>

      <form className='crud-form'>  
          <input type="text" placeholder="Nome do Produto" name='newNme_produto' onChange={(event)=>{
            setNewnme_produto(event.target.value)
          }}
         required/>
         <br/>

         <textarea type="text" className='dsc_produto_box' name="dsc_produto" placeholder="Descrição do produto max(500)" onChange={(e) =>{
          setdsc_produto(e.target.value);
        }} required/>
         <br/>

         <input type="text" name="preco_produto" placeholder="0000.00" onChange={(e) =>{
          setpreco_produto(e.target.value);
        }} required />
         <br/>

         <input type="number" placeholder="ID" name='id_produto' min="0" onChange={(event)=>{
            setid_produto(event.target.value)
          }}
         required/>
         <br/>

          <button onClick={submitForm} >Mostrar Produtos</button>
          <button type="submit" onClick={updateTabela} >Aplicar Mudanças</button>
      </form>
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

export default Update;