import styles from './Contato.module.css'



export function Contato(props) {
  return (
    <div className={styles.Contato}>
      <h1 className={styles.contatoTitulo}>{props.nomePagina}</h1>
      <div className={styles.container}>
        <p>{props.contato}</p>
        <p>{props.contato2}</p>
        <p>{props.contato3}</p>
      </div>
    </div>

  )
}

