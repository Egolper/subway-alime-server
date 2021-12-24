import express from "express";
import stations from "./stations";
import publics from "./publics";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "welcome!" });
});

router.use("/stations", stations);
router.use("/publics", publics);

export default router;
