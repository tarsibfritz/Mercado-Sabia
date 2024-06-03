import { Link } from 'react-router-dom'
import styles from './Header.module.css'


export function Header() {
  return (
    <header className={styles.header} >
      <ul className={styles.menu}>
        <li><Link className={styles.linkmenu} to="./">PÁGINA INICIAL</Link></li>
        <li><Link className={styles.linkmenu} to="./Missao">MISSÃO</Link></li>
        <li><Link className={styles.linkmenu} to="./Produto">PRODUTOS</Link></li>
        <li><Link className={styles.linkmenu} to="./Historia">NOSSA HISTORIA</Link></li>
        <li><Link className={styles.linkmenu} to="./Contato">CONTATO</Link></li>
        <li><Link className={styles.linkmenu} ><img className={styles.carrinho} src="src\assets\imgs\carrinho2.png" alt="" width='30px' /></Link></li>

      </ul>


    </header>
  )
}
