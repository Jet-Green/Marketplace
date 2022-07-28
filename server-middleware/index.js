import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    });
});

app.get('/users', (req, res) => {
    res.send('users')
})

export default app;
