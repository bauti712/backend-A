import { Router } from "express"
import { ProductsRoutes } from "../../features/products/presentation/product_routes"

export abstract class AppRoutes{
    static get routes():Router {
        const router = Router()
        router.use('/api/products',ProductsRoutes.routes)
        return router
    }
}