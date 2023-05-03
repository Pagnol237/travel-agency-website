import styles from './style/footer.module.scss'
import{FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaCopyright} from 'react-icons/fa'
import Link from 'next/link'
export default function Footer(){
    return(
        <>
            <div id={styles.footer_main}>
                <div className={styles.box_container}>
                    <div>
                        <div className={styles.footer_title}>Nos services</div>
                        <p className={styles.footer_text}>
                        Vente de biellets d'avion<br/>
                        Assistance visa<br/>
                        reservation d'hôtel<br/>
                        Location de vehicule<br/>
                        Envoi des colis à l'étranger
                        </p>
                    </div>

                    <div>
                        <div className={styles.footer_title}>Nous contactez</div>
                        <p className={styles.footer_text}>
                            Douala/Makepe carrefour lycée <br/>
                            (+237) 676 90 67 36 <br/>
                            (+237) 696 41 77 09  <br/>
                            (+237) 693 04 12 23 <br/>
                            all_in_one21@yahoo.com
                        </p>
                    </div>
                    <div>
                    <div className={styles.footer_title}>suivez nous</div>
                        <p className={styles.footer_text}>
                                <Link href='/' className={styles.lien}><FaFacebookSquare className={styles.icon}/> Facebook</Link>
                                <Link href='/' className={styles.lien}><FaInstagramSquare className={styles.icon}/> Instagram</Link> 
                                <Link href='/' className={styles.lien}><FaTwitterSquare className={styles.icon}/> Twitter</Link> 
                        </p>
                    </div>
                </div>
                <div className={styles.footer2}>
                    <p translate='no' className={styles.footer_text}><FaCopyright/> Copyright  All in one agency 2023<br/>
                    by pagnol consulting
                    </p>
                </div>
            </div>
        </>
    )
}