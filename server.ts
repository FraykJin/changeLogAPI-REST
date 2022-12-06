import express from "express";
import router from "./src/router";
import morgan from "morgan";
import { protect } from "./src/utils/auth";
import { createNewUser, signin } from "./src/controllers/user";

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", protect, router);


app.post("/user", createNewUser);
app.post("/signin", signin);

app.use((err, req, res, next) => {
  if(err.type === 'auth') {
    res.status(401).json({message: 'unauthorized'});
  } else if (err.type === 'input') {
    res.status(400).json({message: 'invalid input'});
  } else {
    res.status(500).json({message: 'our fault'});
  }
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});

//
