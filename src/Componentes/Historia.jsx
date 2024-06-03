import styles from './Historia.module.css'
import mercado from '../assets/imgs/mercado-sabia.png'

export function Historia(props) {
  return (
    <div className={styles.historiaContainer}>
      <div className={styles.historiaImageContainer}>
        <img src={mercado} className={styles.historiaImage} />
      </div>
      <div className={styles.historiaContent}>
        <h1 className={styles.historiaTitulo}>{props.nomePagina}</h1>
        <p>{props.conteudoHistoria}</p>
      </div>
    </div>
  )
}


/*      <div className={styles.missaoContainer}>
        <h1 className={styles.missaoTitulo}>Missão</h1>
        <p className={styles.missao}>{props.missao}</p>
      </div>
      <div className={styles.redesContainer}>
        <h1>Nossas Redes</h1>
      </div> */