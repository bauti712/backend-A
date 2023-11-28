import { Entity, Column, ManyToOne, PrimaryGeneratedColumn   } from "typeorm"
import { Order } from "./order"
import { Product } from "./product_model"

@Entity()
export class ProductsPerOrder {
    @PrimaryGeneratedColumn()
    id:string| undefined 

    @ManyToOne(() => Order, orden => orden.id)
    order:string

    @ManyToOne(() => Product, product => product.id)
    product:string

    @Column({
        nullable:false,
        type: "int"
    })
    cantidad:number
    
constructor(id:string | undefined ,orderId:string,productId:string,cantidad:number){
    this.order=orderId
    this.product=productId
    this.cantidad=cantidad
    this.id = id
}
   
}