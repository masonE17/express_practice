import express from "express";
const app = express();

app.use(express.json());

app.post("/books/:id/notes", (req, res) => {
    const bookId = req.params.id;
    const name = req.body.name;
    res.status(201).send({ bookId: bookId, name: name });
});

app.listen(3000, () => {
    console.log("Server running...");
});