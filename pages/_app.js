import * as React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
