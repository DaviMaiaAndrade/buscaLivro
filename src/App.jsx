import React,{useState} from 'react'
import fetch from 'node-fetch'
import './App.css'
import Pesquisar from './pesquisar.png'
import Author from './author.png'
import Titulo from './titulo.png'
import Link from './url.png'      


function App(){  

    const [digitado,setDigitado] = useState('');
    const [complet,setComplet]= useState([]);
    
    const Url= ()=>{      
        var url = "https://hn.algolia.com/api/v1/search?query="+digitado;
        
        fetch(url).then((res)=>{
            return res.json();             
        }).then((complet)=>{
            setComplet(complet.hits);
            console.log(complet.hits);
        });       
    };     
     
    const Value = complet.map((item,key)=>{
        return<div className="caixa" key={key}>
                           
           <span> <img className="icon" src={Author} alt="Imagem"/> {item.author}</span> <br/>
           <span> <img className="icon" src={Titulo} alt="Imagem"/>  {item.title}</span> <br/>
           <span> <img className="icon" src={Link} alt="Imagem"/> {item.url}</span>
          
        </div>
    })

    return(
        <div>
            <div className="titulo"><h1>Busque o Livro</h1>  </div> 
            <div className="busca">
                <input  type="text" onChange={(digitado)=>{setDigitado(digitado.target.value)}}/>
                <button type="submit" onClick={Url}><img src={Pesquisar} alt="Imagem"/></button>      
            </div>                
           
            <div>{Value.map(function(item,key){
                return <div className="caixa" key ={key}>
                         {item}                                          
                       </div>;
                })}                
            </div>
        </div>
    );
};

export default App;