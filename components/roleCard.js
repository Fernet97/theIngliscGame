import styles from './card.module.css'

export default function RoleCard(props) {
  return (
    <div className= {styles.card} onClick={props.onCardClick}>
      <img src= {props.imgPath} alt="Your Name"/>
      <h3><b>{props.role} ({props.joined}/{props.max})</b></h3>

      <div className="container">
        <div style={{color:'rgba(173, 216, 230)'}}>Gigion12</div>
        <div style={{color:'rgba(173, 216, 230)'}}>Alfy77</div>
      </div>
    </div>
  );
}
