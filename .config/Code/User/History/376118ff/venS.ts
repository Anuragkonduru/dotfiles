import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";
import authRoutes from "./routes/auth.route.js";

// import helmet from 'helmet';

const allowedOrigins = [
  "https://arcstride.vercel.app",
  "https://arc-stride.vercel.app",
];

//Uncoment below for dev and comment the top
// const allowedOrigins = [ "http://localhost:4200"];

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const app = express();
app.set("trust proxy", 1);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(express.json());
app.use(limiter);
app.use(cors(corsOptions));
app.use(cookieParser());
// app.use(helmet());
app.use(authRoutes);

const port = process.env.PORT || 3000;
app
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
  .on("error", (err: any) => {
    console.error("Failed to start server:", err);
  });

export default app;
