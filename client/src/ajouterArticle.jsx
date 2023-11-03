import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import './style.css'
import axios from 'axios'
 function AjouterArticle(){

    //recuperation des input
    const [nom , setNom] = useState()
    const [categorie , setCategorie] = useState()
    const [date , setDate] = useState()
    const [emplacement , setEmplacement] = useState()
    const [prix , setPrix] = useState()
    const [quantite , setQuantite] = useState()
    const [status , setStatus] = useState()
    const navigate = useNavigate()


    //evenment apres clique
    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/ajouter",
         {nom,categorie,emplacement,date,prix,quantite,status})
        .then(result => {
            console.log(result)
            navigate('/')
        } )
        .catch(err=> console.log(err))
       
       
    }


    return (
        <div>
             <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
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
<img src="" alt="" srcset="" />
             <h1 className="d-flex  justify-content-center">Formulaire d'insertion d'Article</h1>
           <div class=" d-flex  justify-content-center formulaire">
   
    <form action="post" onSubmit={Submit}>
      <div class="mb-3">
        <label for="nom" class="form-label">Nom Produit :</label>
        <input type="text" class="form-control" name="nom"id="nom" placeholder="Entrez le nom de l'article"
        onChange={(e) => setNom (e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="categorie" class="form-label">Categorie :</label>
        <input type="text" name="categorie" class="form-control" id="categorie" placeholder="Entrez la categorie"
          onChange={(e) => setCategorie (e.target.value)}/>
          
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Emplacement :</label>
        <input type="text" class="form-control" name="emplacement" id="emplacement" placeholder="Entrez l'emplacement de l'article"
          onChange={(e) => setEmplacement (e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Date d'Entrée :</label>
        <input type="date" class="form-control" name="date" id="date" 
          onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="prix" class="form-label">Prix Unitaire :</label>
        <input type="number" class="form-control" name="prix" id="prix" placeholder="Entrez votre nom"
          onChange={(e) => setPrix (e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="quantite" class="form-label">Quantite :</label>
        <input type="number" class="form-control" name="quantite" id="quantite" placeholder="Entrez la quantite"
           onChange={(e) => setQuantite(e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="status" class="form-label">Status :</label>
        
          <select class="form-select" aria-label="Default select example" onChange={(e) => setStatus (e.target.value)}>
               
                <option selected>Choisir la status</option>
                <option value="Tres Mauvais" >Tres Mauvais</option>
                <option value="Mauvais">Mauvais</option>
                <option value="Passable">Passable</option>
                <option value="Bon">Bon</option>
                <option value="Tres Bon">Tres Bon</option>
          </select>
      </div>
      <button type="submit" class="btn btn-primary">Ajouter Article</button>
    </form>
  </div>
        </div>
    )
 }

 export default AjouterArticle;