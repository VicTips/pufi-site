import React from 'react'
import image1 from "../../assets/images/1.png"
import image2 from "../../assets/images/2.png"
import image3 from "../../assets/images/3.png"
import image4 from "../../assets/images/4.png"
import image7 from "../../assets/images/7.png"
import image8 from "../../assets/images/8.png"
import image9 from "../../assets/images/9.png"
import image10 from "../../assets/images/10.png"
import styles from "./Cards.module.css"

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}><img className={styles.card_image} src={image1} alt="1" /></div>
      <div className={styles.card}>
        <div>
          <div className={styles.image_container}>
            <img src={image7} alt="7" height={150} />
          </div>
          <h2>Pufi RAIN</h2>
          <p className={styles.card_description}>Descripción del producto. Este es un texto simulado</p>
          <div className={styles.link} >{"> VER MAS"}</div>
        </div>
      </div>
      <div className={styles.card}><div>
        <div className={styles.image_container}>
          <img src={image9} alt="9" height={150} />
        </div>
        <h2>Pufi PUFF</h2>
        <p className={styles.card_description}>Descripción del producto. Este es un texto simulado</p>
        <div className={styles.link} >{"> VER MAS"}</div>
      </div></div>
      <div className={styles.card}><img className={styles.card_image} src={image3} alt="3" /></div>
      <div className={styles.card}><img className={styles.card_image} src={image2} alt="2" /></div>
      <div className={styles.card}><div>
        <div className={styles.image_container}>
          <img src={image8} alt="8" height={150} />
        </div>
        <h2>Pufi CART</h2>
        <p className={styles.card_description}>Descripción del producto. Este es un texto simulado</p>
        <div className={styles.link} >{"> VER MAS"}</div>
      </div></div>
      <div className={styles.card}><div>
        <div className={styles.image_container}>
          <img src={image10} alt="10" height={150} />
        </div>
        <h2>Pufi NAP</h2>
        <p className={styles.card_description}>Descripción del producto. Este es un texto simulado</p>
        <div className={styles.link} >{"> MÁS INFO"}</div>
      </div></div>
      <div className={styles.card}><img className={styles.card_image} src={image4} alt="4" /></div>
    </div>
  )
}

export default Cards
