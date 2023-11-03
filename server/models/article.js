
const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    nom : String,
    categorie : String,
    emplacement : String,
    date : Date,
    prix : Number,
    quantite : Number,
    status : String
})

const ArticleModel = mongoose.model("articledetails",ArticleSchema)
module.exports  =  ArticleModel