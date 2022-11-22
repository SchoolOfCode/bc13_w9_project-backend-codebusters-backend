import router from "./routes/english_routes.js";
import express from "express";
import morgan from "morgan";
const PORT = process.env.PORT;



const app = express();


app.use(morgan("dev"));
app.use(express.json());
//app.use(express.static("public"));


app.use("/api/englishDefinitions", router);

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
  });

export default app;

