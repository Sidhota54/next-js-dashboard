import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
<<<<<<< HEAD
    uri: "http://127.0.0.1:8000/graphql",
=======
    uri: "http://dex-server.herokuapp.com/",
>>>>>>> 89664f3e0756205cc6749f799e1f10e92a899fee
    cache: new InMemoryCache(),
});

export default apolloClient;