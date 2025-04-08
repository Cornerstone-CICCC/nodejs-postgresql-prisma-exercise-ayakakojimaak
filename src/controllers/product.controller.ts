import { Request, Response } from "express";
import { Product } from "@prisma/client";
import productModel from "../models/product.model";

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await productModel.getAllProduct();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products" });
  }
};

const getProductById = async (req: Request<{ id: string }>, res: Response) => {
  const id = Number(req.params.id);
  try {
    const product = await productModel.getProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product" });
  }
};
const createProduct = async (req: Request, res: Response) => {
  const { productName, price } = req.body;
  try {
    const newProduct = await productModel.createProduct({ productName, price });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { productName, price } = req.body;
  try {
    const updatedProduct = await productModel.updateProduct(id, { productName, price });
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const deletedProduct = await productModel.deleteProduct(id);
    if (deletedProduct) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

export default {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
