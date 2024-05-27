import { Router } from "express";
import expenses from "./expensesRoutes";
const router = Router();

router.use("/api/v1/expenses", expenses);

export default router;
