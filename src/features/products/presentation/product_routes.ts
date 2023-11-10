import { Request, Response, Router } from "express";

export abstract class ProductsRoutes{
    static get routes():Router {
        const router = Router()
        router.get('/', (_: Request,res: Response)=>{
            res.json({
                mensaje:"todo ok"
            })
        })
        return router
    }
}