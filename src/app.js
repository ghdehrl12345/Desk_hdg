import express from "express";
import path from "path";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dorenv";
dotenv.config();
import globalRouter from "./routers/globalRouter";
import adminRouter from "./routers/globalRouter";

const app = express();
const PORT = process.env.PORT;

connect();

app.set("view engine", "pug");

app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", globalRouter);
app.use("/", adminRouter);

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
