import { GraphQLServer, PubSub } from 'graphql-yoga'
import { inspect } from 'util'

const ins = x => inspect(x, { depth: null})

const typeDefs = `
  // Write your schema here
`
const resolvers = {
  // Write your resolvers here
}

const countMap = new Map();
const pubsub = new PubSub()
const server = new GraphQLServer({ 
  typeDefs, 
  resolvers, 
  context: { pubsub, countMap } 
})

server.start(() => console.log('Server is running on localhost:4000'))