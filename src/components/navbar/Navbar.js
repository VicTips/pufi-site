import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          Pufi<sup>®</sup>
        </div>
        <div className={styles.categories}>
          <div>
            <div className={styles.category_icon}>
              <ion-icon name="bed-outline"></ion-icon>
            </div>
            <div className={styles.category_name}>
              PUFI PUFF
            </div>
          </div>
          <div className={styles.divider}></div>
          <div>
            <div className={styles.category_icon}>
              <ion-icon name="umbrella-outline"></ion-icon>
            </div>
            <div className={styles.category_name}>
              PUFI RAIN
            </div>
          </div>
          <div className={styles.divider}></div>
          <div>
            <div className={styles.category_icon}>
              <ion-icon name="bag-outline"></ion-icon>
            </div>
            <div className={styles.category_name}>
              PUFI CART
            </div>
          </div>
          <div className={styles.divider}></div>
          <div>
            <div className={styles.category_icon}>
              <ion-icon name="easel-outline"></ion-icon>
            </div>
            <div className={styles.category_name}>
              PUFI NAP
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.account}>
            MI CUENTA
            <div className={styles.account_icon}>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
          </div>
          <div className={styles.divider_2}></div>
          <div>
            MI COMPRA
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
