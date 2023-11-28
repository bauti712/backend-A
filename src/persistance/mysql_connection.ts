import { DataSource } from "typeorm";
import User from "../models/user"
import { Product } from "../models/product_model";
import { ProductsPerOrder } from "../models/products_per_order";
import { Order } from "../models/order";

 export const appDataSource= new DataSource({
    "password": "1234",
    "type": "mysql",
    "host": "localhost",
    "username": "root",
    "port": 3306,
    "database": "db",
    "entities": [Product, User, ProductsPerOrder, Order],
    "synchronize": true,
    "logging": true
  })

//CONSOLA DE SQL (COMAND LINE CLIENT)
//ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY '1234';
//FLUSH PRIVILEGES;


