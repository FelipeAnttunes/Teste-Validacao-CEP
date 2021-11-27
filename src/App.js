//import {useEffect} from 'react';
//import api from './services/ecommerceApi.js';


//function App() {

   // useEffect(() => {
    //  async function fetchData (){

     // }

     // fetcchData()
    //},[])
     
 //   async function fetchData (){
  //    const response = await api.get("*/produtos");
   //   console.log(response)
    //    }


 // return (
  //  <>
  //  <h1>Hello World !!</h1>
  //  <button onClick={fetchData}>Fetch Data</button>
  //  </>
 // );
//}

//export default App;

import { useState } from "react";
import api from "./services/viaCepApi";
import "./Styles.css";

function App() {
  const [endereco, setEndereco] = useState({
    cep: "",
    uf: "",
    localidade: "",
    bairro: "",
    logradouro: ""
  })

  async function handleAddressValidation() {
    var cep = document.getElementById("cep").value;
    var { data } = await api.get(`/${cep}/json`);
    setEndereco({ cep: cep, uf: data.uf, localidade: data.localidade, bairro: data.bairro, logradouro: data.logradouro });
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("Formulário salvo!")
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={(e) => handleSubmit(e)}>

        <label htmlFor="nome">Nome completo</label>
        <input type="text" name="nome" id="nome" />

        <label htmlFor="dataNascimento">Data de nascimento</label>
        <input type="date" name="dataNascimento" id="dataNascimento" />

        <label htmlFor="estadoCivil">Estado Civil</label>
        <select name="estadoCivil" id="estadoCivil">
          <option value="1">Solteiro(a)</option>
          <option value="2">Casado(a)</option>
          <option value="3">Viúvo(a)</option>
        </select>

        <label htmlFor="cep">CEP</label>
        <input style={{ display: "inline" }} type="text" name="cep" id="cep" onChange={(event) => { setEndereco({...endereco, cep: event.target.value}) }} />
        <button type="button" style={{ marginLeft: "5px" }} onClick={handleAddressValidation}>Validar CEP</button>

        <label htmlFor="uf">UF</label>
        <input type="text" name="uf" id="uf" value={endereco.uf} onChange={(event) => { setEndereco({...endereco, uf: event.target.value}) }} />

        <label htmlFor="localidade">Localidade</label>
        <input type="text" name="localidade" id="localidade" value={endereco.localidade} onChange={(event) => { setEndereco({...endereco, localidade: event.target.value}) }} />

        <label htmlFor="bairro">Bairro</label>
        <input type="text" name="bairro" id="bairro" value={endereco.bairro} onChange={(event) => { setEndereco({...endereco, bairro: event.target.value}) }} />

        <label htmlFor="logradouro">Logradouro</label>
        <input type="text" name="logradouro" id="logradouro" value={endereco.logradouro} onChange={(event) => { setEndereco({...endereco, logradouro: event.target.value}) }} />

        <button style={{ marginTop: "10px" }} type="submit">Enviar formulário</button>
      </form>
    </div>
  );
}

export default App;