import React,{  useState, useEffect} from "react";
import axios from 'axios';
import './style/criptoPrecio.css'


export default function App() {
  const [datos, setDatos] = useState([]);
  const [segundo, setSegundo ] = useState("BTC");

  const getDatos = () => {
  axios.get(`https://rest.coinapi.io/v1/exchangerate/USD/${segundo}/?apikey=82FDC183-B0C2-47F8-8357-0355F2AECC75`).then((response) => {
  //console.log(response.data);
  setDatos(response.data);

  //setBase(response)
  }).catch((error)=> {
    console.log(error);
  })
  } 
  const handleName = (e) => {
    console.log(e.target.value);
    setSegundo(e.target.value);

  }


  const handleSubmit = (e) => {
    getDatos();
  }

  useEffect(()=>{
    getDatos();
  },[])
  console.log(1/datos.rate);

return (

    <div >
      <h1
      style={{color: 'red'}}
      >${1/datos.rate < 0.01 ? (1/datos.rate).toFixed(4) : (1/datos.rate).toFixed(2)}</h1>

      <form onClick={handleSubmit}  action="">
        <select  onChange={handleName} name="" id="" >
        <option selected defaultValue="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="LTC">LTC</option>
        <option value="DOT">DOT</option>
        <option value="KDA">KDA</option>
        <option value="XRP">XRP</option>
        <option value="XLM">XLM</option>
        <option value="EOS">EOS</option>
        <option value="ADA">ADA</option>
        <option value="BLOK">BLOK</option>
        <option value="VRA">VRA</option>

        </select>
      </form>

      
      </div>
    )

}
