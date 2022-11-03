import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({

    uri: "http://127.0.0.1:8000/graphql",
    cache: new InMemoryCache(),
});

export default apolloClient;