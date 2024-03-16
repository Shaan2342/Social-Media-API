import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
const app = express();

app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

mongoose
.connect('mongodb+srv://admin:8RMTyTcrZitvsqQg@cluster0.j62ysm4.mongodb.net/'
).then(()=> app.listen(5000)).then(() =>console.log("Connected to Database and listening to localhost"))
.catch((err)=>console.log(err));

