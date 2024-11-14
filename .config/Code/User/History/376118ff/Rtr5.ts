import express from "express";
import routes from "routes/products.route";

const app = express();
app.use(express.json());
const port = 3000;
app.use("/Products/", routes);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
