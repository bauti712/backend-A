

import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        nullable: false,
        unique: true,
    })
    name!:string

    @Column({
        nullable: false
    })
    price!:number

    @Column({
        nullable: true,
    })
    imageurl?:string 

    constructor(nombre: string, precio: number, image: string) {
        this.name = nombre;
        this.price = precio;
        this.imageurl = image;
    }

   

}

