import express from "express";
import morgan from "morgan";

import englishRouter from "./routes/english_routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));


app.use("/api/englishDefinitions", englishRouter);

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
  });

export default app;

