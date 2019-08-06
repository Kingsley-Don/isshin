import React from 'react'
import {NextPage} from 'next'
import Head from 'next/head'
import './index.css'

const Index: NextPage = () => {
  return (
    <div className="Index">
      <Head>
        <title>Home</title>
      </Head>
      <img
        src="https://i.loli.net/2019/04/08/5caac418e0bfe.png"
        width="300"
        alt="isshin"
      />
      <h1>Isshin</h1>
      <p>Start your project now</p>
    </div>
  )
}

export default Index
