import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className= {styles.App}>
      <div className= {styles.header}>
        <h2>🇬🇧 The iNgLisC GaMe 🇬🇧</h2>
      </div>

      <div  className= {styles.main}>
          {children}
      </div>

      <p>Powered by <b>_fernet_ 🛠️</b></p>

    </div>
  );
}
