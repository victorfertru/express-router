var express = require("express");
var router = express.Router();

const users = [
  {
    id: 2,
    name: "Daniel",
    age: 22,
  },
  {
    id: 1,
    name: "Javier",
    age: 29,
  },
];

router.get("/all", function (req, res) {
  res.send(users);
});

router.get("/:name?:age?", (req, res) => {
  const { name, age } = req.query;
  const foundUser = users.find(
    (user) => user.name.toLowerCase() === name && user.age === +age
  );
  res.send(foundUser);
});

router.post("/add", (req, res) => {
  users.push(req.body);
  res.send(users);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const userInfo = req.body;
  const index = users.findIndex((user) => user.id === +id);
  users[index] = { ...users[index], ...userInfo };
  /*   users[index] = {
    id: users[index].id,
    name: users[index].name,
    age: users[index].age,
    id: userInfo.id,
    name: userInfo.name,
    age: userInfo.age,
  }; */
  res.send(users[index]);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === +id);
  users.splice(index, 1);
  res.send(users);
});

module.exports = router;
