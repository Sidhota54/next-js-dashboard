import '../styles/globals.css'
import style from '../styles/globals.css'
import Layout from './Layout/Layout'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql',
    cache: new InMemoryCache(),
   
  });
  return (

    <div>
       <ApolloProvider client={client}>
  <Layout>
    <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
    </div>
   
  )
}
  
export default MyApp