const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

  type CoffeeShop {
    title: String
    address: String
    rating: String
  }

  type Query {
    coffeeShopList: [CoffeeShop]
  }
`;

const coffeeShops = [
  {
    title: 'Corvus Coffee Roasters',
    address: 'Kate Chopin',
    rating: 'TBD'
  },
]
const resolvers = {
  Query: {
    coffeeShopList: () => coffeeShops,
  },
};

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
}
const server = new ApolloServer({ typeDefs, resolvers, cors: corsOptions });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});