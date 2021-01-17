import '../styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  	<>
  	<Head>
	  	<link rel="preconnect" href="https://fonts.gstatic.com"/>
		<link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet"/>
		<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
	</Head>
  	<Component {...pageProps} />
  	</>)
}