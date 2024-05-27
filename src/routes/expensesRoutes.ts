import { Router } from "express";
import {
  addExpense,
  deleteExpense,
  getExpenseByID,
  getExpenses,
  updateExpense,
} from "../controllers/expensesController";

const router = Router();

router.route("/").get(getExpenses).post(addExpense);
router
  .route("/:id")
  .get(getExpenseByID)
  .delete(deleteExpense)
  .put(updateExpense);

export default router;
