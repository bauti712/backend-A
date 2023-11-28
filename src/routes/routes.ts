import { Router } from "express"
import { controler } from "../controllers/controler"

export abstract class Routes{
    public static getRoutes = () => {
        const router = Router() 
        const productController = new controler()
        router.get("/products",productController.getAllProducts)
        router.post("/products/", productController.createproduct)
        router.post("/login", productController.login )
        router.post ("/register",productController.register)
        router.post ("/buy",productController.cart)
        return router
    }
}

