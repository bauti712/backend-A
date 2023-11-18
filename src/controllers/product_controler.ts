import { Request, Response } from "express";
import { Product } from "../models/product_model";
import { appDataSource } from "../db/mysql_connection";

export class ProductController{
     productRepository = appDataSource.getRepository(Product)
    public readonly getAllProducts =async (_:Request, res: Response) => {
        const products = await this.productRepository.find()
        res.json({
            products
        })
    }

    public readonly createproduct =async (req:Request, res:Response) => {
        const {price,name,imageUrl}= req.body
        const product = await this.productRepository.findOne({
            where:{
                name 
            }
    

        })
        if(product){
            return res.status(400).json({
                error: ' El producto con nombre ' + name + ' ya existe '
                
            })
        }

        try {
            const newProduct = new Product()
            newProduct.name = name
            newProduct.price = price
            newProduct.imageurl = imageUrl
            await this.productRepository.save(newProduct)
            return res.status(201).json({
                mensaje: 'producto creado',
                producto: newProduct
            })

            

            
        } catch (error) {
            return res.status(500).json({
                error: 'no se encontro el producto'
            })
        }

    
        
    }
}