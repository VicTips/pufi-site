import React from 'react';
import styles from "./Newsletter.module.css";
import { useForm, ValidationError } from '@formspree/react';

const Newsletter = () => {
  const [state, handleSubmit] = useForm("mzbwgbdq");
  if (state.succeeded) {
    return <section className={styles.container}>
      <div>
        <div className={styles.section_title}>
          NEWSLETTER
        </div>
        <h1>
          ¡GRACIAS POR SUSCRIBIRTE!
        </h1>
      </div>
    </section>;
  }
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
        <form className={styles.form} onSubmit={handleSubmit}>
          <input id='email' name='email' type="email" placeholder='Ingresa tu email' />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <button className={styles.arrow} type="submit" disabled={state.submitting}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
