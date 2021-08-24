import { gql } from 'apollo-server-express'

const queries = gql`
type Query {
    coffeeShopList(): [CoffeeShop]
}`