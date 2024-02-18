import express from "express";
import dotenv from "dotenv";
import routing from "./app/routes/index";
import connect_mongodb from "./app/database/mongodb";

const app = express();
const port = process.env.PORT || 1343;

dotenv.config();

connect_mongodb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// configuring routes of the api's
routing(app);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
