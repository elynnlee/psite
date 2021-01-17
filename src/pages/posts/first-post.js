import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout home={false}>
    	<Head>
    		<title>First Post</title>
    	</Head>
      <h1>Coming soon...</h1>
    </Layout>
  )
}