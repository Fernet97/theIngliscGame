import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Home() {

  const [input, setInput] = useState('');

  return (
    <Layout>
      <Head>
        <title>The IngliSC Game</title>
      </Head>

      <h1>🔥 Engioy 🔥</h1>
      <input
        placeholder="Nickname"
        value={input} onInput={e => setInput(e.target.value)}
      />
      <Link href={{ pathname: '/lobby', query: { nickname: input } }}>
        <button>Go!</button>
      </Link>

      <div class= "CardLayout">

        <div class="card">
          <img src="/images/icon-192x192.png" alt="Your Name"/>
          <div class="container">
            <Link href = "/rules"><a><h4><b>ReGoLaMenTo️</b></h4></a></Link>
            <p>Regole & Costituzione</p>
          </div>
        </div>

        <div class="card">
          <img src="/images/icon-192x192.png" alt="Your Name"/>
          <div class="container">
            <h4><b>WoRd LiSt</b></h4>
            <p>Lista parole usate</p>
          </div>
        </div>

        <div class="card">
          <img src="/images/icon-192x192.png" alt="Your Name"/>
          <div class="container">
            <h4><b>🛠️ DeVeLopeR 🛠️</b></h4>
            <p>Pierluigi Liguori</p>
          </div>
        </div>

      </div>

    </Layout>
  )
}
