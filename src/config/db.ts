import { DataSource } from "typeorm";
import { Country } from "../entities/country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "checkpoint.sqlite",
  entities: [Country],
  synchronize: true,//pour ne pas gérer les migrations
});