import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css'

 function Article(){
    const [articles,setArticle] = useState([{
   
    }]);

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setArticle(result.data))
        .catch(err => console.log(err))
      
    },[])  

    const supprimer = (id) => {
      axios.delete('http://localhost:3001/supprimerArticle/'+id)
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(err => console.log(err))
    }
    
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg bg-body-tertiary nav ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">UIDT-STOCK</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Articles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/ajouter">Ajouter</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
<h1 className="d-flex  justify-content-center ">La Liste des Articles</h1>
<div className="d-flex   justify-content-center ">
    
            <div className=" rounded p-3">
             <table class="table">
                <thead>
                    <tr>
                    <th scope="col">id Article</th>
                    <th scope="col">Nom Produit</th>
                    <th scope="col">Cateorie</th>
                    <th scope="col">Emplacement</th>
                    <th scope="col">Date d'entrée </th>
                    <th scope="col">Prix Unitaire </th>
                    <th scope="col">Quantite </th>
                    <th scope="col">status </th>
                    <th scope="col">Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map((article) =>{
                            return <tr>
                                <td>{article._id}</td>
                                <td>{article.nom}</td>
                                <td>{article.categorie}</td>
                                <td>{article.emplacement}</td>
                                <td>{article.date}</td>
                                <td>{article.prix}</td>
                                <td>{article.quantite}</td>
                                <td>{article.status}</td>
                                
                                <td>
                                    <div className="d-flex justify-content-between bouton" >
                                        <div > 
                                        
                                         <a href={`update/${article._id}`}  type="button" className="btn btn-primary"><i class="bi bi-pencil-square"></i></a>
                                       </div>
                                       <div>
                                       <a  type="button" className="btn btn-danger" onClick={(e) => supprimer(article._id)}><i class="bi bi-trash"></i></a>
                                     
                                       </div>
                                        </div>
                                </td>
                             </tr>

                        })
                    }
                    
                   
                </tbody>
                </table>

            </div>
            
        </div>
        
        </div>
        
    )
 }

 export default Article;