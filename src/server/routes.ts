import { Router } from "express"
import { ProductsRoutes } from "../routes/products_routes"

export abstract class AppRoutes{
    static get routes():Router {
        const router = Router()
        router.use('/api/products',ProductsRoutes.getRoutes())
        return router
    }
}