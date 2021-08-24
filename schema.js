import { gql } from 'apollo-server-express'

const typeDefs = gql`
type CoffeeShop {
    title: String
    address: String
    rating: String
}
`