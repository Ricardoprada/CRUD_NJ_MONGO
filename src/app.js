// @ts-nocheck

import path from "path";
import express from "express";
import {create} from "express-handlebars";
import indexRoutes from "./routes/index.routes";

const app = express();

// settings
app.set("views", path.join(__dirname, "views"));
const exphbs = create({
  extname: '.hbs',
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout:'main'
});
app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//Routes
app.use(indexRoutes);

export default app;