import Layout from '../src/components/Layout/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contexts from '../src/components/Contexts/Contexts';

function MyApp({ Component, pageProps }) {

  return (
    <Contexts>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Contexts>
  )
}
export default MyApp

