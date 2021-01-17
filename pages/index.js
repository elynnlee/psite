import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm currently a Product Manager at Opendoor.
        </p>
        <p>
          Previously, I was at Quora as a PM and I've interned at Facebook,
          Amazon, and Google as a Software Engineering Intern.
           I graduated from The University of Texas at Austin in 2015
           with an MS and BS in Computer Science.
        </p>
        <p>
          You can find me on <a href="https://www.linkedin.com/in/elynnlee/">LinkedIn</a>, {' '}
          <a href="https://www.quora.com/profile/Elynn-Lee">Quora</a>,
          and, in my free time, <a href="https://www.instagram.com/elynnimator/">Instagram</a>.
        </p>
      </section>
    </Layout>
  )
}