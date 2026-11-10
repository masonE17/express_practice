import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/add", (req, res) => {
    const rawA = req.query.a;
    const rawB = req.query.b;
    if (rawA === "" || rawA === undefined || rawB === "" || rawB === undefined) {
        return res.status(400).json({ error: "Missing parameters. Please provide both 'a' & 'b'." });
    }
    const a = Number(rawA);
    const b = Number(rawB);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid input. Please provide two numbers." });
    } else {
        res.status(200).json({ result: a + b });
    }
});

app.listen(PORT, () => {
    console.log("Server is running...");
})