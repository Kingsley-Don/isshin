import React from 'react'
import App, {Container} from 'next/app'
import Head from '../components/Head'
import '../styles/global.css'

export default class Isshin extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <Head>
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            name="viewport"
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
