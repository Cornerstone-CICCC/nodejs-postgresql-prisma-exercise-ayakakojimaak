import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

// Fetch all employees
const getAllProduct = async () => {
  return await prisma.product.findMany({
    select: {
      id: true,
      productName: true,
      price: true,
    },
  });
};

// Fetch a single employee by ID
const getProductById = async (id: number) => {
  return await prisma.product.findUnique({
    where: { id },
  });
};

// Create a new employee
const createProduct = async (data: { productName: string; price: number }) => {
  return await prisma.product.create({
    data,
  });
};

// Update an employee by ID
const updateProduct = async (id: number, data: { productName: string; price: number }) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

// Delete an employee by ID
const deleteProduct = async (id: number) => {
  return await prisma.product.delete({
    where: { id },
  });
};

export default {
  getAllProduct,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
};
