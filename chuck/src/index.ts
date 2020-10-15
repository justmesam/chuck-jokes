const { ApolloServer } = require("apollo-server")


const typeDefs = require('./app/schema')
const resolvers = require('./app/resolvers')


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}`))
