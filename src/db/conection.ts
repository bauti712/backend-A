import { DataSource } from "typeorm";

export const appDataSource= new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "bauti",
  password: "123456",
  logging: true,
  entities: []  
})

