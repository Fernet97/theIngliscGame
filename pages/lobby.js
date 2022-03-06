import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import RoleCard from '../components/roleCard.js'

import { useEffect, useState } from 'react'
import io from 'socket.io-client'
let socket;

export default function Lobby() {

  const router = useRouter()
  const nickname = router.query.nickname;
  const room = router.query.room;

    const [RoomMsg, setRoomMsg] = useState('--')

    useEffect(() => socketInitializer(), [])

    const socketInitializer = async () => {
      await fetch('/api/room');
      socket = io()

      socket.on('connect', () => {
        console.log('connected');
      })

      socket.on('chat message', msg => {
        setRoomMsg(msg)
      })

    }



    const join = () => {
      // Avvisa che vuoi fare una richiesta x entrare nella room
      socket.emit('joinRoom', {user: nickname, numRoom: room});
    }

    const sendToRoom = () => {
      let msg = "ciao ragazzuoli!"
      socket.emit('chat message', {msg, room});
    }


  return (
    <Layout>
      <Head>
        <title>La Lobby</title>
      </Head>

      <h1>Seleziona ruolo</h1>
      <h3>Messaggio nella room: {RoomMsg}</h3>

      <p>Giocatore "{nickname}" in Room "{room}"</p>

      <div class= "CardLayout">
        <RoleCard onCardClick={join}
            role = "Guesser"
            descr = "Il guesser bla bla bla bla bla"
            imgPath = "/images/guesser.jpg"
            joined = "1"
            max = "2"
         />

         <RoleCard onCardClick={join}
             role = "Paroliere"
             descr = "Il paroliere bla bla bla bla bla bla"
             imgPath = "/images/paroliere.jpg"
             joined = "1"
             max ="1"
          />
      </div>


      <Link href="/">
        <button style={{marginTop: "5%"}} >Bec home</button>
      </Link>

        <button style={{marginTop: "5%"}} onClick = {sendToRoom}>Invio MSg</button>

    </Layout>
  )
}
