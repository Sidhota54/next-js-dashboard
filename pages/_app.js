import '../styles/globals.css'
import style from '../styles/globals.css'
import Layout from './Layout/Layout'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import apolloClient from '../apollo-client';

function MyApp({ Component, pageProps }) {
 
  return (

    <div>
       <ApolloProvider client={apolloClient}>
  <Layout>
    <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
    </div>
   
  )
}
  
export default MyApp