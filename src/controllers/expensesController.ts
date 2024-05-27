
//TODO - GET all Expenses

import { Request, Response } from "express";
import { Expenses } from "../models/expenses";
import { catchAsync } from "../utils/catchBlock";

export const getExpenses = catchAsync(async (req: Request, res: Response) => {
  const expenses = await Expenses.findAll();

  res.status(200).json({
    status: "success",
    data: expenses,
  });
});

//TODO - POST expense

export const addExpense = catchAsync(async (req: Request, res: Response) => {
  const { body } = req;
  const expense = await Expenses.create(body);
  res.status(200).json({
    status: "success",
    data: expense,
  });
});

//TODO - GET by ID

export const getExpenseByID = catchAsync(
  async (req: Request, res: Response) => {
    const { params } = req;
    const expense = await Expenses.findByPk(params.id);
    console.log(expense);
    if (!expense) {
      res.status(404).json({ status: "error" });
    } else {
      console.log(expense);
      res.status(200).json({
        status: "success",
        data: expense,
      });
    }
  },
);

//TODO - UPDATE

export const updateExpense = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const expense = await Expenses.findByPk(id);
  console.log(req.body);
  if (!expense) {
    res.status(404).json({ status: "error" });
  } else {
    await expense.update(req.body);
    console.log(expense);
    res.status(200).json({
      status: "success",
      data: expense,
    });
  }
});

//TODO - DELETE

export const deleteExpense = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const expense = await Expenses.findByPk(id);

  if (!expense) {
    res.status(404).json({ status: "error" });
  } else {
    await expense.destroy();
    console.log(expense);
    res.status(200).json({
      status: "success",
      data: expense,
    });
  }
});
