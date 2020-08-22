import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
let users = [];
router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    const user = req.body;

    // const userWithId = { ...user, id: uuidv4() };

    users.push({
        ...user,
        id: uuidv4(),
    });

    // users.push(user);

    res.send(`User with the name ${user.firstName} added to the database!`);
});

//  /users/2 => req.params {id:2}

router.get("/:id", (req, res) => {
    const { id } = req.params;

    const findUser = users.find((user) => user.id == id);
    res.send(findUser);
});

// Delete User Data using delete() method

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);

    res.send(`User with id ${id} is deleted from the database.`);
});

// Update User Data Using patch() method

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find(() => user.id == id);
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }

    res.send(`User with the id ${id} has been updated.`);
});

export default router;