import { Router } from "express"
import { controler } from "../controllers/controler"

export abstract class Routes{
    public static getRoutes = () => {
        const router = Router() 
        const productController = new controler()
        router.get("/",productController.getAllProducts)
        router.post("/", productController.createproduct)
        router.post("/login", productController.login )
        return router
    }
}

