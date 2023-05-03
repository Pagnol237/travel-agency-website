import styles from './style/nav.module.scss'
import styles1 from './style/banner.module.scss'
import styles2 from './style/about.module.scss'
import styles3 from './style/services.module.scss'
import styles4 from './style/footer.module.scss'
import Image from 'next/image'
import WhiteLogo from './images/Logo-all-in-one-agency-blue.png'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-scroll'
import { Roboto } from 'next/font/google'
import { useState } from 'react'
export default function Navigation(){
    
    const [isopen,setIsopen]=useState(false);
    const togglemenu =()=>{
        setIsopen(!isopen)
    }

    return (
        <>
            <div className={styles.navContainer} >
                <div className={styles.bars} >
                    <FaBars onClick={togglemenu}/>
                </div>
                <div className={styles.logoContainer}>
                    <Image
                    src={WhiteLogo}
                    className={styles.Logo}
                    />
                </div>
                <div className={`${isopen?styles.on:styles.off}`}>
                    <div className={styles.menuContainer}>
                        <Link to={`${styles1.banner_main}`} onClick={togglemenu}  className={styles.lien} spy={true} smooth={true} offset={-60} duration={500}> ACCUEIL</Link>
                        <Link to={`${styles2.about_main}`} onClick={togglemenu} className={styles.lien} spy={true} smooth={true} offset={-60} duration={500}>A PROPOS</Link>
                        <Link to={`${styles3.sercices_main}`} onClick={togglemenu} className={styles.lien} spy={true} smooth={true} offset={-60} duration={500}>SERVICES</Link>
                        <Link to={`${styles4.footer_main}`} onClick={togglemenu} className={styles.lien} spy={true} smooth={true} offset={-60} duration={500}>CONTACTS</Link>
                    </div>
                </div>

            </div>
        </>
    )
}