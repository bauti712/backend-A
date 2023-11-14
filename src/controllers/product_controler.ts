import { Request, Response } from "express";
import { Product } from "../models/product_model";
import { appDataSource } from "../db/sqlite_connection";

export class ProductController{
    public readonly getAllProducts =async (_:Request, res: Response) => {
        const productRepository = appDataSource.getRepository(Product)
        
        const products = await productRepository.find()
        res.json({
            products
        })
        
    }
}