import { useState } from 'react'
import  './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Article from './article'
import AjouterArticle from './ajouterArticle'
import UpdateArticle from './updateArticle'
import headerPage from './header'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {

  return (
  <div>
   
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Article/>} ></Route>
        <Route path='/ajouter' element={<AjouterArticle/>} ></Route>
        <Route path='/update/:id' element={<UpdateArticle/>} ></Route>
       </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
