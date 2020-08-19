import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const users = [];
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  // const userWithId = { ...user, id: uuidv4() };

  users.push({ ...user, id: uuidv4() });

  // users.push(user);

  res.send(`User with the name ${user.firstName} added to the database!`);
});

router.get("/:id", (req, res) => {
  res.send("The GET ID Route");
});

export default router;
