import express from "express";
import dotenv from "dotenv";
import AIRoute from "./routes/ai.routes.js";
import dataRoute from "./routes/data.route.js";
import cors from "cors"
import path from "path"
dotenv.config();
const app = express();
const PORT = process.env.PORT ;
import {data} from "./MOCK_DATA.js" 
import {USER} from "./MOCK_DATA2.js" 
import connectDB from "./Config/mongodb.js";

app.use(express.json());
app.use(cors({
    origin : "*",
}));


app.get("/api/info",(req , res) => {
    res.send({data : data});
})
app.get("/api/data" , (__ , res ) => {
    res.json(USER);
})

const __dirname = path.resolve();

    app.use("/api" , AIRoute);
    app.use("/api" , dataRoute);

    app.use(express.static(path.join(__dirname,"../Frontend/dist")));

    app.get("*" , (req , res) => {
        res.sendFile(path.join(__dirname , "../Frontend", "dist", "index.html"));
    })



app.listen(PORT ,() => {
    console.log("Server is running on PORT :", PORT);
    connectDB();
})