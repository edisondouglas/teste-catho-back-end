import "reflect-metadata";
import { DataSource } from "typeorm";
import { Candidate } from "../../../../modules/candidates/infra/database/typeorm/entities/Candidate";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "catho",
  synchronize: false,
  logging: true,
  entities: [Candidate],
  subscribers: [],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});
