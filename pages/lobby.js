import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { useRouter } from 'next/router'


import { useEffect, useState } from 'react'
import io from 'socket.io-client'
let socket;

export default function Lobby() {

  const router = useRouter()
  const nickname = router.query.nickname;

    const [input, setInput] = useState('')

    useEffect(() => socketInitializer(), [])

    const socketInitializer = async () => {
      await fetch('/api/room');
      socket = io()

      socket.on('connect', () => {
        console.log('connected')
      })

      socket.on('update-input', msg => {
        setInput(msg)
      })

    }

    const onChangeHandler = (e) => {
      setInput(e.target.value)
      socket.emit('input-change', e.target.value)
    }

    const join = () => {
      console.log("entro")
      io.to("some room").emit("some event");
    }


  return (
    <Layout>
      <Head>
        <title>La Lobby</title>
      </Head>

      <h1>{nickname}</h1>
      <img src="/images/icon-192x192.png" alt="Your Name" />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <input
        placeholder="Type something"
        value={input}
        onChange={onChangeHandler}
      />

      <button onClick={join}>
        Sono il paroliere
      </button>
    </Layout>
  )
}
