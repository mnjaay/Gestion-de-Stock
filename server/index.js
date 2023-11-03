const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const ArticleModel = require('./models/article');


const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/articles")

 
//recuperation des donnees depuis l a base donnees et affichage
app.get('/',(req,res) => {
    ArticleModel.find({})
    .then(articledetails => res.json(articledetails))
    .catch(err => res.json(err))
})

//recuperation a partir de l'id de l'article
app.get('/getArticle/:id',(req,res) => {
    const id = req.params.id;
    ArticleModel.findById({id})
    .then(articledetails => res.json(articledetails))
    .catch(err => res.json(err))
})
//Insertion des modification
app.put('/update/:id', (req,res) => {
    const id = req.params.id;
    ArticleModel.findByIdAndUpdate(
        {_id: id}, 
        {nom: req.body.nom, categorie: req.body.categorie,
        date: req.body.date, emplacement: req.body.emplacement,
        prix: req.body.prix,quantite: req.body.quantite,status: req.body.status})
        .then(articledetails => res.json(articledetails))
        .catch(err => res.json(err))
})

//Insertion des donnees de l'article
app.post('/ajouter', (req,res) => {
    ArticleModel.create(req.body)
    .then(articledetails => res.json(articledetails))
    .catch(err => res.json(err))
})

//Supprimer des donnees de l'article
app.delete('/supprimerArticle/:id', (req,res) => {
    const id = req.params.id
    ArticleModel.findByIdAndDelete({_id: id})
    .then(articledetails => res.json(articledetails))
    .catch(err => res.json(err))
})

app.listen(port,() => {console.log("le serveur demarre sur 3001")})