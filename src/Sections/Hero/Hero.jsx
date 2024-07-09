import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../Common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light'? sun : moon
    const twitterIcon = theme === 'light'? twitterLight : twitterDark 
    const githubIcon = theme === 'light'? githubLight : githubDark
    const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark


  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img src={heroImg} className={styles.hero}/>
            <img src={themeIcon} className={styles.colorMode} onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Gabriel 
                <br/>
               Chidera
            </h1>
            <h2>
                Frontend developer
            </h2>
            <span>
                <a href='' target='_blank'>
                    <img src={twitterIcon}/>
                </a>
                <a href='' target='_blank'>
                    <img src={githubIcon}/>
                </a>
                <a href='' target='_blank'>
                    <img src={linkedinIcon}/>
                </a>
            </span>
            <p className={styles.desciption}>
            With a passion for developing modern React web apps for commercial businesses.
            </p>
            <a href={CV} download={CV} >
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero