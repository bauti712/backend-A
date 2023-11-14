import express from "express";
import cors from "cors";
import { AppRoutes } from "./routes";
import { appDataSource } from "../db/sqlite_connection";


class Server {
  private readonly app = express();
  private readonly port = 8080;
  public start = async() => {
    await this.middlewares();
    this.app.use(AppRoutes.routes)
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
