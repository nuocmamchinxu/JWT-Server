import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouters from "./routes/web";
require("dotenv").config();
const app = express();
const PORT = process.env || 8091;
// config viewEngine
configViewEngine(app);

//init webRoutes
initWebRouters(app);

app.listen(PORT, () => {
  console.log("JWT is running on the port:" + PORT);
});
