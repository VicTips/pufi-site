import React from 'react'
import styles from "./Newsletter.module.css"

const Newsletter = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.section_title}>
          NEWSLETTER
        </div>
        <h1>
          SUSCRIBITE
        </h1>
        <p>
          Y enterate de todas las novedades
        </p>
        <div className={styles.form}>
          <input type="email" placeholder='Ingresa tu email' />
          <div className={styles.arrow}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
