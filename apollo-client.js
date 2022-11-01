import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "http://dex-server.herokuapp.com/",
    cache: new InMemoryCache(),
});

export default apolloClient;