import express from "express";
import cors from "cors";
import { AppRoutes } from "./routes";

class Server {
  private readonly app = express();
  private readonly port = 8080;
  public start = () => {
    this.middlewares();
    this.app.use(AppRoutes.routes)
    this.app.listen(this.port, () => {
      console.log("server running in port " + this.port);
    });
  };
  private middlewares = () => {
    this.app.use(cors());
    this.app.use(express.json());

  };
}

export default Server;
