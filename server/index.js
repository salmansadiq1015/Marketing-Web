import express from "express";
import morgan from "morgan";
import cors from "cors";
import color from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import subscriptionRoute from "./routes/subscriptionRoute.js";
import contactRoute from "./routes/contactRoute.js";
import blogRoute from "./routes/blogRoute.js";

// Dotenv Config
dotenv.config();

// DB Config
connectDB();

// Initailization
const app = express();

// Middlewares
app.use(express.json());

app.use(
  cors({
    origin: [" https://deploy-mern-1mark.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(morgan("dev"));

// APIs
app.use("/api/v1/subscription", subscriptionRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/blog", blogRoute);

// Rest API
app.use("/", (req, res) => {
  res.send(`<h1>App is ready </h1>`);
});

// PORT
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}.`.bgMagenta.white);
});
