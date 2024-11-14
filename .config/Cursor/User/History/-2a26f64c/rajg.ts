import express from "express";
import { rateLimit } from "express-rate-limit";
import routes from "./src/routes/auth.route";
// import helmet from 'helmet';

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(express.json());
app.use(limiter);
// app.use(helmet());
app.use("/", routes);

const port = process.env.PORT || 3000;
app
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.error("Failed to start server:", err);
  });

export default app;
