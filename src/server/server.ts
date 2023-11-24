import express from "express";
import cors from "cors";
import {Routes} from "../routes/routes"
import { appDataSource } from "../persistance/mysql_connection";


class Server {
  private readonly app = express();
  private readonly port = 8080;
  public start = async() => {
    await this.middlewares();
    this.app.use(Routes.getRoutes())
    this.app.listen(this.port, () => {
      console.log("server running in port " + this.port);
    });
  };
  private middlewares = async () => {
    this.app.use(cors());
    this.app.use(express.json());
    try {
      await appDataSource.initialize()
      console.log ("conexion establecida correctamente ")
    } catch (error) {
      console.log(error)
    }
    
  };
}

export default Server;
