import { Entity, PrimaryGeneratedColumn,   } from "typeorm"

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id:string | undefined
    

    constructor(id:string | undefined){
        this.id=id
    }
}