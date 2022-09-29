import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={`${styles.container} position-absolute w-100`}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          Pufi<sup>®</sup>
        </div>
        <div className={styles.categories}>
          <div className={styles.category}>
            <div className={styles.category_icon}>
              <ion-icon name="bed-outline"></ion-icon>
            </div>
            <div className={styles.category_name}>
              PUFI PUFF
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.category}>
            <div className={styles.category_icon}>
              <ion-icon name="umbrella-outline"></ion-icon>
            </div>
            <div className={styles.category_name}>
              PUFI RAIN
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.category}>
            <div className={styles.category_icon}>
              <ion-icon name="bag-outline"></ion-icon>
            </div>
            <div className={styles.category_name}>
              PUFI CART
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.category}>
            <div className={styles.category_icon}>
              <ion-icon name="easel-outline"></ion-icon>
            </div>
            <div className={styles.category_name}>
              PUFI NAP
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <div className='dropdown'>
            <div className={`${styles.account}`} data-bs-toggle="dropdown" aria-expanded="false">
              MI CUENTA
              <div className={styles.account_icon}>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
            </div>
            <ul className="dropdown-menu">
              <li><div className="dropdown-item" >INICIAR SESIÓN</div></li>
            </ul>
          </div>
          <div className={styles.divider_2}></div>
          <div className='pointer'>
            MI COMPRA
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
