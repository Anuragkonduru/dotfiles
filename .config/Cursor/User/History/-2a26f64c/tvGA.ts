import express from "express";
import { rateLimit } from "express-rate-limit";
import productRoutes from "./src/routes/products.route";
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(express.json());
app.use(limiter);
app.use("/Products", productRoutes);

// Uncomment the following lines to enable the server to listen on a specified port
const port = process.env.PORT || 3000; // Default to port 3000 if not specified
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
