import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Card from '../components/card'
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Home() {

  const [inputName, setInputName] = useState('');
  const [inputRoom, setInputRoom] = useState('');

  return (
    <Layout>
      <Head>
        <title>The IngliSC Game</title>
      </Head>

      <h1>🔥 Engioy 🔥</h1>
      <input
        placeholder="Nickname"
        size = "14"
        value={inputName} onInput={e => setInputName(e.target.value)}
      />
      <input
        placeholder="Room"
        size = "3"
        value={inputRoom} onInput={e => setInputRoom(e.target.value)}
      />

      <Link href={{ pathname: '/lobby', query: { nickname: inputName.length <= 0 ? "Guest" : inputName, room: inputRoom.length <= 0 ? "General" : inputRoom }}}>
        <button>Play!</button>
      </Link>

      <div class= "CardLayout">

        <Card
            title = "ReGoLaMenTo️"
            descr = "Regole & Costituzione"
            imgPath = "/images/icon-192x192.png"
            link = "/rules"
         />

         <Card
             title = "WoRd LiSt"
             descr = "Lista parole usate"
             imgPath = "/images/icon-192x192.png"
             link = "/"
          />

          <Card
              title = "🛠️ DeVeLopeR 🛠️"
              descr = "Pierluigi Liguori"
              imgPath = "/images/icon-192x192.png"
              link = "/rules"
           />


      </div>

    </Layout>
  )
}
