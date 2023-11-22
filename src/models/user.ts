import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 50 })
    usuario: string;

    @Column({ length: 50 })
    email: string;

    @Column({ length: 50 })
    password: string;

    constructor(usuario: string, email: string, password: string) {
        this.usuario = usuario;
        this.email = email;
        this.password = password;
    }
}