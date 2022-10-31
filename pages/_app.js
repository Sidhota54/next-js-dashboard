import '../styles/globals.css'
import style from '../styles/globals.css'
import Layout from './Layout/Layout'
  
function MyApp({ Component, pageProps }) {
  return (

    <div>
  <Layout>
    <Component {...pageProps} />
    </Layout>
    </div>
   
  )
}
  
export default MyApp