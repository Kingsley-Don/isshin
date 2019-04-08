import React, {Component} from 'react'
import Head from '../components/Head'
import './index.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
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
}
