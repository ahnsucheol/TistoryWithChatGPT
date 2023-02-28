import cors from "cors";
import express from "express";
import morgan from "morgan";
import { myDataSource } from "../config/db.config";

const app = express();

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized.");
  })
  .catch((err) => {
    console.error("Data Source initiate failed: ", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("combined"));

const port: number = Number(process.env.PORT);

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
