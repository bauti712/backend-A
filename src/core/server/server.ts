import express from "express";
import cors from "cors";

class Server {
  private readonly app = express();
  private readonly port = 8080;
  public start = () => {
    this.middlewares();
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
