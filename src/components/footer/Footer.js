import React from 'react'
import styles from './Footer.module.css'
import Logo from "../../assets/images/brandlive-logo.png"

const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sections}>
        <div className={styles.logo}>Pufi<sup>®</sup></div>
        <div className={styles.links}>
          <div className='pointer'>PUFI RAIN</div>
          <div className='pointer'>PUFI PUFF</div>
          <div className='pointer'>PUFI CART</div>
          <div className='pointer'>PUFI NAP</div>
        </div>
        <div className={`${styles.links} ${styles.border_left}`}>
          <div className='pointer'>CONTACTO</div>
          <div className='pointer'>AYUDA</div>
          <div className='pointer'>CÓMO COMPRAR</div>
          <div className='pointer'>TÉRMINOS Y CONDICIONES</div>
        </div>
        <div className={styles.border_left}>
          COMPRA 100% SEGURA
          <div className={styles.warranty_icons}>
            <ion-icon name="qr-code-outline"></ion-icon>
            <ion-icon name="shield-half-outline"></ion-icon>
            <div className={styles.warranty_text}>
              COMPRÁ CON LA GARANTÍA DE PUFI
            </div>
          </div>
        </div>
        <div className={`${styles.social} ${styles.border_left}`}>
          SEGUINOS EN
          <div className={styles.social_icons}>
            <ion-icon name="logo-facebook" id="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter" id="logo-twitter"></ion-icon>
            <ion-icon name="logo-instagram" id="logo-instagram"></ion-icon>
          </div>
        </div>
      </div>
      <div className={styles.copyright_container}>
        <div className={styles.copyright}>
          PUFI Copyright 2017 - Todos los derechos reservados
        </div>
        <div>
          <img src={Logo} alt="brandlive" />
        </div>
      </div>
    </section>
  )
}

export default Footer
