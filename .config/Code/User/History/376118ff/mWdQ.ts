import express from "express";
import { rateLimit } from "express-rate-limit";
import productRoutes from "routes/products.route";
const app = express();
const port = 3000;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100, 
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(express.json());
app.use(limiter);
app.use("/Products", productRoutes);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
// http://localhost:3000/Products/getAllProducts
// http://localhost:3000/Products//getProduct/1000007
