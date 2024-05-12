// npm install @apollo/server graphql
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { dataSource } from "./config/db";
import { CountryResolver } from "./resolvers/country.resolver";


const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
     validate: { forbidUnknownValues: false },//pour gérer le Null
  });

  const server = new ApolloServer({ 
    schema,
   });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at ${url}`);
}

start();