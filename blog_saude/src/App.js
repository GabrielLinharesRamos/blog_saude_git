import { useEffect,useState } from "react";
import "./style.css"

function App() {

  const [nutri,setNutri]=useState([]);

  useEffect(()=>{
    function loadApi(){
      fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
      .then((r)=>r.json())
      .then((json)=>{
        setNutri(json)
      })
    }

    loadApi();
  });

  return (
    <div className="container">
      <header>
      <h1>React Nutri</h1>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"/>
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao">Acessar</a>
          </article>
        )
      })}
      </div>
  );
}

export default App;
