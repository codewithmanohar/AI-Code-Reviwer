import express from "express";
import dotenv from "dotenv";
import AIRoute from "./routes/ai.routes.js";
import cors from "cors"
import path from "path"
dotenv.config();
const app = express();
const PORT = process.env.PORT ;

app.use(express.json());
app.use(cors({
    origin : "*",
}));
const __dirname = path.resolve();

    app.use("/api" , AIRoute);

    app.use(express.static(path.join(__dirname,"../Frontend/dist")));

    app.get("*" , (req , res) => {
        res.sendFile(path.join(__dirname , "../Frontend", "dist", "index.html"));
    })



app.listen(PORT ,() => {
    console.log("Server is running on PORT :", PORT);
})