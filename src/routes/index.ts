import express from "express";
import station from "./station";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "welcome!" });
});

router.use("/station", station);

export default router;
