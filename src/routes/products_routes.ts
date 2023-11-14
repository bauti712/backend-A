import { Router } from "express"
import { ProductController } from "../controllers/product_controler"

export abstract class ProductsRoutes{
    public static getRoutes = () => {
        const router = Router() 
        const productController = new ProductController()
        router.get("/",productController.getAllProducts)
        return router
    }
}

