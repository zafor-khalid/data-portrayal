import Layout from '../src/components/Layout/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contexts from '../src/components/Contexts/Contexts';

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Contexts>
        <Component {...pageProps} />
      </Contexts>
    </Layout>
  )
}
export default MyApp

