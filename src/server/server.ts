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
          const producto1 = new Product("Mini 2", 80, "https://images.unsplash.com/photo-1619892447950-72edfbc8427e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
          const producto2 = new Product("dji air 2", 120, "https://images.unsplash.com/photo-1631052941794-2a6e26d4ac17?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
          const producto3 = new Product("dji spark", 450, "https://images.unsplash.com/photo-1583824904188-f2f792acd329?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
          const producto4 = new Product("air", 80, "https://images.unsplash.com/photo-1513082033533-d5de90571ceb?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
          const producto5 = new Product("dji inspire",25, "https://images.unsplash.com/photo-1456615913800-c33540eac399?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

          await productRepository.save([producto1, producto2, producto3, producto4, producto5]);
      }

        console.log("Connexion funcionando");
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default Server;
