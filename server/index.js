import express  from "express";
import db from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

db(username, password);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

DefaultData();