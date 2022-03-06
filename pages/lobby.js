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

    const [msgToRoom, setMsgToRoom] = useState('')

    const [listMsg, setlistMsg] = useState('')

    useEffect(() => socketInitializer(), [])

    const socketInitializer = async () => {
      await fetch('/api/room');
      socket = io()

      socket.on('connect', () => {
        console.log('connected');
        // Avvisa che vuoi fare una richiesta x entrare nella room
        socket.emit('joinRoom', {user: nickname, numRoom: room});
      })

      // Ascolta msg della room prima che io entrassi
      socket.on('HistoryOfRoom', ({user, numRoom, msg}) => {
      })

      // Ascolto un nuovo msg dalla Room
      socket.on('new message', ({user, numRoom, msg}) => {
        console.log("è arrivato un nuovo messaggio!"+ msg);
        let newMsg = "["+numRoom+"] "+user+": "+msg+"\n"
        setlistMsg(newMsg);
      })



    }


    const setMyRole = () => {

    }

    const sendToRoom = () => {
      // Scrivo sulla  Room
      socket.emit('new message', {user: nickname, numRoom: room, msg: msgToRoom });

    }


  return (
    <Layout>
      <Head>
        <title>La Lobby</title>
      </Head>


      <p>Connessione come "{nickname}" nella Room "{room}"</p>

      <h1>Seleziona ruolo</h1>
      <div class= "CardLayout">
        <RoleCard onCardClick={setMyRole}
            role = "Guesser"
            descr = "Il guesser bla bla bla bla bla"
            imgPath = "/images/guesser.jpg"
            joined = "0"
            max = "2"
         />

         <RoleCard onCardClick={setMyRole}
             role = "Paroliere"
             descr = "Il paroliere bla bla bla bla bla bla"
             imgPath = "/images/paroliere.jpg"
             joined = "0"
             max ="1"
          />
      </div>


    <div  style={{
        backgroundColor: "#add8e6",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        padding: "1%"
      }}>
        <div>
          <input
            placeholder="Nuovo messaggio"
            style={{width: "50vw"}}
            onInput={e => setMsgToRoom(e.target.value)}
          />
          <button onClick = {sendToRoom}>Invia</button>
        </div>
          <textarea readonly rows="10" value={listMsg} placeholder="Chat della Room ..."
          style={{
            height: "80%",
            fontFamily: 'lucida console',
            fontSize: "large"
          }}/>

    </div>

      <Link href="/">
        <button style={{marginTop: "5%"}} >Bec home</button>
      </Link>

    </Layout>
  )
}
