import { Request, Response } from "express";
import { Product } from "../models/product_model";
import { appDataSource } from "../persistance/mysql_connection";
import User from "../models/user"
import { Order } from "../models/order";
import { ProductsPerOrder } from "../models/products_per_order";

export class controler {
    productRepository = appDataSource.getRepository(Product)
    public readonly getAllProducts = async (_: Request, res: Response) => {
        const products = await this.productRepository.find()
        res.json({
            products
        })
    }

    public readonly createproduct = async (req: Request, res: Response) => {
        const { price, name, imageUrl } = req.body
        const product = await this.productRepository.findOne({
            where: {
                name
            }

        })
        if (product) {
            return res.status(400).json({
                error: ' El producto con nombre ' + name + ' ya existe '

            })
        }

        try {
            const newProduct = new Product(name, price, imageUrl)
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
    //CONTROLADOR DEL LOGIN
    public readonly login = async (req:Request, res: Response) => {
        const {usuario, password} = req.body
        try{
            const comparador = await appDataSource.manager.findOne(User, {where:{usuario, password}})
            if (comparador) {res.json({mensaje: "ingreso correcto"})}
            else {res.status(400).json({mensaje: "ingreso fallido"})}
        }
        catch(error){
            console.log(error)
        }
    }

    //CONTROLADOR DEL REGISTER
    public readonly register = async (req:Request, res:Response) =>{
        const {email,password,name} = req.body
        console.log (req.body)
        
         
        const comparador = await appDataSource.manager.findOne(User, {where:{email}})
        if (comparador) {
            return res.status(400).json({ error: 'El Usuario o Email ya esta en uso' });
        } else {

            const newUser = new User(name, email, password);
            try {
                await appDataSource.manager.save(newUser)
                return res.status(200).json({mensaje: 'el usuario se guardo correctamente'})
                
            } catch (error) {
                console.log(error)

                return res.status(400).json({mensaje:'no se puso crear el usuario'})
                
            }
           
        }
    }

    //CONTROLADOR DEL CART
    public readonly cart = async (req:Request, res:Response) =>{
       const productsAcount=req.body["products"]
       const orderRepository = appDataSource.getRepository(Order)

       const order = new Order(undefined)
       const createdOrder = await orderRepository.save(order)
       
       Object.entries(productsAcount).forEach(async ([key, value]) => {
        await this.saveProductPerOrder (createdOrder.id!, key,value as number)
      });
           res.status(201).json({
            mensaje: "compra realizada"
           })
        
    }

    private readonly saveProductPerOrder = async(orderId:string,productId:string ,amount:number)=>{
        console.log("orderId: "+orderId)
        console.log("productId: "+productId)
        console.log("amount: "+amount)
        const productsPerOrderRepository = appDataSource.getRepository(ProductsPerOrder)
        const productsPerOrder = new ProductsPerOrder(undefined,orderId,productId,amount)
        await productsPerOrderRepository.save (productsPerOrder)
    }
    




}