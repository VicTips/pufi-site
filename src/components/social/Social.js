import React from 'react'
import styles from "./Social.module.css"
import image1 from "../../assets/images/1.png"
import image2 from "../../assets/images/2.png"
import image3 from "../../assets/images/3.png"
import image4 from "../../assets/images/4.png"
import image5 from "../../assets/images/5.png"
import image6 from "../../assets/images/6.png"

const Social = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.section_title}>
          INSTAGRAM
        </div>
        <h1>
          #ESPUFI
        </h1>
        <div className={styles.images}>
          <img className='pointer brightness' src={image1} alt="1" height={150} />
          <img className='pointer brightness' src={image2} alt="2" height={150} />
          <img className='pointer brightness' src={image3} alt="3" height={150} />
          <img className='pointer brightness' src={image4} alt="4" height={150} />
          <img className='pointer brightness' src={image5} alt="5" height={150} />
          <img className='pointer brightness' src={image6} alt="6" height={150} />
        </div>
      </div>
    </section>
  )
}

export default Social
