import Layout from '../components/layout'
import Link from 'next/link'
import Head from 'next/head'

export default function Rules() {
  return (
    <Layout>
    <Head>
      <title>Rules</title>
    </Head>

    <h2>✅ CoStiTuZioNe ✅</h2>
    <p>" Il fine del gioco è imparare nuove PAROLE INGLESI. "</p>
    <p>" Ad ogni infrazione viene annullata la manche e chi sbaglia viene penalizzato di un punto "</p>
    <hr/>
    <h2>⭕ ReGoLE ⭕</h2>
    <p>🔹 Il paroliere sceglie una parola in inglese da indovinare 🔹<br/><br/>
       🔹 Il paroliere deve scegliere altre 4 parole che non sono sinonimi della parola prescelta 🔹<br/><br/>
       🔹 Il paroliere mostra le 5 opzioni agli altri due giocatori 🔹<br/><br/>
       🔸 I giocatori scelgono una parola a testa. Il paroliere ne scarta una di un giocatore (altrimenti un' altra parola non scelta). 🔸<br/><br/>
       🔸 Tutti possono cambiare parola dopo lo scarto, costretti o non. 🔸<br/><br/>
       🔸 La conferma di una parola da parte del giocatore si effettua con un battito della mano sulla superficie ed è irrevocabile. 🔸<br/><br/>
    </p>

    <h4>🔻 Punteggio giocatore 🔻</h4>
    <p>
    <b>3 Punti</b>  per chi indovina senza mai cambiare.<br/>
    <b>1 Punti</b>  se vinci sulla seconda parola cambiata (costretta a cambiare o non).<br/>
    <b>0 Punti</b>  se il giocatore non indovina.<br/>
    </p>

    <br/>

    <h4>🔻 Punteggio paroliere 🔻</h4>
    <p>
    <b>3 Punti</b>  se nessun giocatore indovina.<br/>
    <b>1 Punti</b>  se un solo giocatore indovina con risposta cambiata.<br/>
    <b>0 Punti</b>  se c'è almeno un giocatore che indovina senza cambio oppure se entrambi vincono (a prescindere dall'eventuale cambio).<br/>
    </p>

    <br/>
    <Link href="/">
      <button>Bec home</button>
    </Link>
    </Layout>
  )
}
