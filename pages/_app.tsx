import '../styles/globals.css'
    import type { AppProps } from 'next/app'
    import Header from '../app/components/Header'
    import Footer from '../app/components/Footer'

    function MyApp({ Component, pageProps }: AppProps) {
      return (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      )
    }

    export default MyApp
