import { Entity, PrimaryGeneratedColumn,   } from "typeorm"

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id:string
    

    constructor(id:string){
        this.id=id
    }
}