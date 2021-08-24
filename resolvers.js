const resolvers = {
    Query: {
        coffeeShopList() {
            return {
                title: "Corvus Coffee Roasters",
                address: "1740 S Broadway, Denver, CO 80210",
                rating: "TBD"
            }
        }
    }
}