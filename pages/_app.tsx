/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head'
import '../styles/global.css'

export default class NextApp extends App {
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
