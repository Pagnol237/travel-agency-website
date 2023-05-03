import '@/styles/globals.css'
import Head from 'next/head'
import Navigation from './component/Navigation'

export default function App({ Component, pageProps }) {
  return <>
          <Navigation/>
          <Component {...pageProps} />
        </> 
  
}
