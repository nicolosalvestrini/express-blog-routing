const express = require('express');
const router = express.Router();
const postBlog = [
    {
      id: "1",
      titolo: "Primo post",
      contenuto: "Questo è il contenuto del primo post",
      immagine: "public/post/torta_paesana.jpeg",
      tags: ["news", "javascript", "web"],
    },
    {
      id: "2",
      titolo: "Secondo post",
      contenuto: "Questo è il contenuto del secondo post",
      immagine: "public/post/pasta_barbabietola.jpeg",
      tags: ["node", "backend", "express"],
    },
    {
      id: "3",
      titolo: "Terzo post",
      contenuto: "Questo è il contenuto del terzo post",
      immagine: "public/post/pane_fritto_dolce.jpeg",
      tags: ["react", "frontend", "ui"],
    },
    {
      id: "4",
      titolo: "Quarto post",
      contenuto: "Questo è il contenuto del quarto post",
      immagine: "public/post/cracker_barbabietola.jpeg",
      tags: ["database", "sql", "api"],
    },
    {
      id: "5",
      titolo: "Quinto post",
      contenuto: "Questo è il contenuto del quinto post",
      immagine: "public/post/ciambellone.jpeg",
      tags: ["design", "css", "responsive"],
    },
  ];

// INDEX → lista
router.get('/', (req, res) => {
  res.json(postBlog)

});

// SHOW → dettaglio
router.get('/:id', (req, res) => {

});

// STORE → crea
router.post('/', (req, res) => {

});

// UPDATE → sostituisce tutto
router.put('/:id', (req, res) => {

});

// PATCH → modifica parziale
router.patch('/:id', (req, res) => {

});

// DESTROY → elimina
router.delete('/:id', (req, res) => {

});

module.exports = router