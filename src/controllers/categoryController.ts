import { Request, Response } from 'express';
import { catchAsync } from '../utils/catchBlock';
import { Category } from '../models/categories';

//TODO - GET Categories

export const getCategories = catchAsync(async (req: Request, res: Response) => {
    const categories = await Category.findAll();
    res.status(200).json({
        status: 'success',
        data: categories,
    });
});

//TODO - GET by ID

export const getCategoriesById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category)
        res.status(404).json({
            status: 'error',
            message: 'category not found',
        });

    res.status(200).json({
        status: 'success',
        data: category,
    });
});

//TODO - POST

export const addCategory = catchAsync(async (req: Request, res: Response) => {
    const { body } = req;
    const category = await Category.create(body);
    res.status(200).json({
        status: 'success',
        data: category,
    });
});

//TODO - Update

export const updateCategory = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category) {
        res.status(404).json({ status: 'error' });
    } else {
        await category.update(req.body);
        console.log(category);
        res.status(200).json({
            status: 'success',
            data: category,
        });
    }
});

//TODO - Delete

export const deleteCategory = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (!category) {
        res.status(404).json({ status: 'error' });
    } else {
        await category.destroy();
        console.log(category);
        res.status(200).json({
            status: 'success',
            data: category,
        });
    }
});
