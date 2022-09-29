import React from 'react'
import Navbar from "../navbar/Navbar"
import Carousel from '../carousel/Carousel'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={`${styles.container} position-relative`}>
      <Navbar />
      <Carousel />
    </div>
  )
}

export default Header
