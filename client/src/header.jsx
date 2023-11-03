import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import './style.css'
import axios from 'axios'
 function headerPage(){



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

        </div>
    )
 }

 export default headerPage;