import express from "express";
import cors from "cors";
import {Routes} from "../routes/routes"
import { appDataSource } from "../persistance/mysql_connection";
import {Product} from "../models/product_model"


class Server {
  private readonly app = express();
  private readonly port = 8080;

  public start = async () => {
    await this.middlewares();
    this.app.use(Routes.getRoutes());
    this.app.listen(this.port, () => {
      console.log("Server running on port " + this.port);
    });
  };

  private middlewares = async () => {
    this.app.use(cors());
    this.app.use(express.json());

    try {
      await appDataSource.initialize().then(async (connection) => {
        const productRepository = connection.getRepository(Product);
        const existingProducts = await productRepository.find();
        if (existingProducts.length === 0) {
          const producto1 = new Product("Mini 2", 80, "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
          const producto2 = new Product("dji air 2", 120, "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80");
          const producto3 = new Product("dji spark", 450, "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80");
          const producto4 = new Product("air", 80, "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80");
          const producto5 = new Product("dji inspire",25, "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80");

          await productRepository.save([producto1, producto2, producto3, producto4, producto5]);
      }

        console.log("Connection established successfully");
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default Server;
