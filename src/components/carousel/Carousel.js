import React from 'react'
import image11 from "../../assets/images/11.jpg"
import image12 from "../../assets/images/12.jpg"
import image13 from "../../assets/images/13.jpg"
import styles from "./Carousel.module.css"

const Carousel = () => {
  return (
    <div className={styles.carousel_width}>
      <div id="carouselExampleCaptions" className="carousel slide position-absolute" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image11} alt="11" className="d-block" />
            <div className="carousel-caption d-none d-md-block">
              <div className={styles.text}>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</div>
              <button className={styles.btn}>SHOP</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image12} alt="12" className="d-block" />
            <div className="carousel-caption d-none d-md-block">
              <div className={styles.text}>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</div>
              <button className={styles.btn}>SHOP</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image13} alt="13" className="d-block" />
            <div className="carousel-caption d-none d-md-block">
              <p className={styles.text}>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</p>
              <button className={styles.btn}>SHOP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
