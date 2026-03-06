import { Router } from "express";
import userRouter from "../user/routes";

const router = Router();

// ====== User route ======
router.use("/user", userRouter);
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default router;
