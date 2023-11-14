import { DataSource } from "typeorm";
import { Product } from "../models/product_model";

export const appDataSource= new DataSource({
    type: "sqlite",
    database: './data.db',
    entities: [Product],
    synchronize: true,
    logging: true
  })

