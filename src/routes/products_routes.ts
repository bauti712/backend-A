import { Request, Response, Router } from "express"

export abstract class ProductsRoutes{
    public static getRoutes = () => {
        const router = Router() 
        router.get("/",(_:Request,res: Response)=>{
            return res.json({
                hola:"muchachos"
            })

        })


        return router
    }
}

