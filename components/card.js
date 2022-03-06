import styles from './card.module.css'
import Link from 'next/link'

export default function Card(props) {
  return (
    <div className= {styles.card}>
      <img src= {props.imgPath} alt="Your Name"/>
      <div className="container">
        <Link href = {props.link}><a><h4><b>{props.title}</b></h4></a></Link>
        <p>{props.descr}</p>
      </div>
    </div>
  );
}
