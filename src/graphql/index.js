const { GraphQLServer } = require("graphql-yoga");
const { resolve } = require("path");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  resolvers,
  typeDefs: resolve(__dirname, "schema.graphql")
});

server.createHttpServer({
  cors: true,
  playground: true // local onde podemos testar api
})

module.exports = server.express;