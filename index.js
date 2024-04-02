import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
