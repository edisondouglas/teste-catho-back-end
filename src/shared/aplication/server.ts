import * as express from "express";
import { router } from "../presentation/routes";
import * as cors from "cors";
import { AppDataSource } from "../infra/typeorm/configs/data-source";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(3308, () => console.log("Server is running on port 3308"));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
