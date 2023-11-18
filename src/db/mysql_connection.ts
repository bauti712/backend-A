import { DataSource } from "typeorm";
import { Product } from "../models/product_model";

 export const appDataSource= new DataSource({
    "password": "123456",
    "type": "mysql",
    "host": "localhost",
    "username": "root",
    "port": 3306,
    "database": "db",
    "entities": [Product],
    "synchronize": true,
    "logging": true
  })

