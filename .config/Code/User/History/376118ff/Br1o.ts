import express from "express";
import productRoutes from "routes/products.route";

const app = express();
app.use(express.json());
app.use(limiter);
const port = 3000;
app.use("/Products", productRoutes);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
// http://localhost:3000/Products/getAllProducts
// http://localhost:3000/Products//getProduct/1000007
