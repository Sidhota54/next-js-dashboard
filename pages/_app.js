import '../styles/globals.css'
import style from '../styles/globals.css'
import Layout from './Layout/Layout'
<<<<<<< HEAD
import {  ApolloProvider } from '@apollo/client';
=======
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
>>>>>>> 89664f3e0756205cc6749f799e1f10e92a899fee
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