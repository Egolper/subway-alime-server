import express from "express";
import stations from "./stations";
import publics from "./publics";
import test from "./test";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "welcome!" });
});

router.use("/stations", stations);
router.use("/publics", publics);
router.use("/test", test);

export default router;
