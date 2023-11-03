import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
 function UpdateArticle(){
  //FOnction pour mo
    const {id} = useParams()
    const [nom , setNom] = useState()
    const [categorie , setCategorie] = useState()
    const [date , setDate] = useState()
    const [emplacement , setEmplacement] = useState()
    const [prix , setPrix] = useState()
    const [quantite , setQuantite] = useState()
    const [status , setStatus] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3001/getArticle/"+id)
        .then(result => {
          console.log(result)
          setNom(result.data.nom)
          setCategorie(result.data.categorie)
          setDate(result.data.date)
          setEmplacement(result.data.emplacement)
          setPrix(result.data.prix)
          setQuantite(result.data.quantite)
          setStatus(result.data.status)
        
        
        })
        .catch(err => console.log(err))
      
    },[])  
    const Update = (e) => {
      e.preventDefault();
      axios.put("http://localhost:3001/update/"+id,
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

             <h1 className="d-flex  justify-content-center">Modification d'Article</h1>
           <div class=" d-flex  justify-content-center formulaire">
   
    <form onSubmit={Update} >
      <div class="mb-3">
        <label for="nom" class="form-label">Nom Produit :</label>
        <input type="text" class="form-control" name="nom"id="nom" placeholder="Entrez le nom de l'article"
          value={nom} onChange={(e) => setNom (e.target.value)} />
      </div>
      <div class="mb-3">
        <label for="categorie" class="form-label">Categorie :</label>
        <input type="text" name="categorie" class="form-control" id="categorie" placeholder="Entrez la categorie"
         value={categorie} onChange={(e) => setCategorie (e.target.value)} />
          
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Emplacement :</label>
        <input type="text" class="form-control" name="emplacement" id="emplacement" placeholder="Entrez l'emplacement de l'article"
          value={emplacement} onChange={(e) => setEmplacement (e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Date d'Entrée :</label>
        <input type="date" class="form-control" name="date" id="date" 
         value={date}  onChange={(e) => setDate (e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="prix" class="form-label">Prix Unitaire :</label>
        <input type="number" class="form-control" name="prix" id="prix" placeholder="Entrez votre nom"
         value={prix} onChange={(e) => setPrix (e.target.value)} />
      </div>
      <div class="mb-3">
        <label for="quantite" class="form-label">Quantite :</label>
        <input type="number" class="form-control" name="quantite" id="quantite" placeholder="Entrez la quantite"
         value={quantite} onChange={(e) => setQuantite (e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="status" class="form-label">Status :</label>
        
          <select class="form-select" aria-label="Default select example" onChange={(e) => setStatus (e.target.value)} >
               
                <option selected >Choisir la status</option>
                <option value="Tres Mauvais" >Tres Mauvais</option>
                <option value="Mauvais">Mauvais</option>
                <option value="Passable">Passable</option>
                <option value="Bon">Bon</option>
                <option value="Tres Bon">Tres Bon</option>
          </select>
      </div>
      <button type="submit" class="btn btn-primary">Modifier Article</button>
    </form>
  </div>
        </div>
    )
 }

 export default UpdateArticle;