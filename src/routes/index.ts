import express from "express";
import stations from "./stations";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "welcome!" });
});

router.use("/stations", stations);

export default router;
