import { DataSource } from "typeorm";
import User from "../models/user"
import { Product } from "../models/product_model";

 export const appDataSource= new DataSource({
    "password": "1234",
    "type": "mysql",
    "host": "localhost",
    "username": "root",
    "port": 3306,
    "database": "db",
    "entities": [Product, User],
    "synchronize": true,
    "logging": true
  })

//CONSOLA DE SQL (COMAND LINE CLIENT)
//ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY '1234';
//FLUSH PRIVILEGES;


