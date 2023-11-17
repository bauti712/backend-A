import { DataSource } from "typeorm";
import { Product } from "../models/product_model";

export const appDataSource= new DataSource({
    "type": "mysql",
    "host": "localhost",
    "port": 65000,
    "username": "bauti",
    "password": "abcd",
    "database": "db",
    "entities": [Product],
    "synchronize": true,
    "logging": true
  })

