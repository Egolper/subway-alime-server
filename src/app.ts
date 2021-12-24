import "dotenv/config";
import cors from "cors";
import express from "express";
import router from "./routes";
import { loadDB } from "./loaders";
import { errorResponser, errorLogger } from "./middlewares";
import {
  load_heroku_awaker,
  load_공공데이터_수집기,
} from "./loaders/loadSchedule";

const app = express();
const PORT = process.env.PORT || 1803;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);
app.use(errorLogger);
app.use(errorResponser);

app.listen(PORT, async () => {
  await loadDB();

  console.log(`
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃   Server listening on port: ${PORT}    ┃
  ┃     http://localhost:${PORT}/api       ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `);

  load_heroku_awaker();
  load_공공데이터_수집기();
});
