var express = require("express");
var router = express.Router();

// posts list
const posts = require("../data/postsList");
// comments list
const comments = require("../data/comments");

/// Mostrar todo el listado de posts
router.get("/", function (_, res) {
  res.send(posts);
});

// Añadir nuevo post (Postman)
router.post("/", (req, res) => {
  //meter los posts al array
  posts.push(req.body);
  res.send(posts);
});

// Editar post indicando la id (Postman)
// url: localhost:3000/posts/(idPost)
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const newPostInfo = req.body;
  // encontrar posición en el array
  const index = posts.findIndex((post) => post.id === +id);
  // editar los campos
  posts[index] = { ...posts[index], ...newPostInfo };

  res.send(posts[index]);
});

// Eliminar un post indicando la id (Postman)
// url: localhost:3000/posts/(idPost)
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((post) => post.id === +id);
  posts.splice(index, 1);
  res.send(posts);
});

// Mostrar todos los comentarios almacenados
// url: localhost:3000/posts/comments
router.get("/comments", (_, res) => {
  res.send(comments);
});

// Añadir comentario indicando idPost (Postman)
// url: localhost:3000/posts/(idPost)/addcomment
router.post("/:id/addcomment", (req, res) => {
  const { id } = req.params;
  const comment = req.body;
  comments.push(comment);
  res.send(comments);
});

// Eliminar comentario por id de Comentario(Postman)
// url: localhost:3000/posts/comments/(idComment)
router.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  const index = comments.findIndex((comment) => comment.idComment === +id);
  comments.splice(index, 1);
  res.send(comments);
});

// Mostrar todos los comentarios que tiene un post indicando la idPost
// url: localhost:3000/posts/(idPost)/comments
router.get("/:id/comments", (req, res) => {
  const { id } = req.params;
  const foundComments = comments.filter((comment) => comment.idPost === +id);
  res.send(foundComments);
});

module.exports = router;
