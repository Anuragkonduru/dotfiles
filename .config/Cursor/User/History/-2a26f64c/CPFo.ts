import express from "express";
import { rateLimit } from "express-rate-limit";
import productRoutes from "./src/routes/products.route";
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(express.json());
app.use(limiter);
app.use("/Products", productRoutes);

// app.listen(port, () => {
//   console.log(`server is running on http://localhost:${port}`);
// });

module.exports = app;
