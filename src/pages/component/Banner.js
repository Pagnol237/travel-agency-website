import styles from './style/banner.module.scss'
import Image from 'next/image'
import Picture1 from './images/voyageur.png'
import WhiteLogo from './images/Logo-all-in-one-agency-blue.png'
export default function Banner(){
  return(
    <>
      <div id={styles.banner_main}>
        <div className={styles.block1}>
          <div className={styles.title1}>Bienvenue chez</div>
          <div className={styles.title2} translate="no">ALL IN ONE AGENCY</div>
          <div className={styles.texte}>Votre entreprise citoyenne fiable pour tous vos projet de voyages d'etude
            voyage d'afaire et touristique, a travers le monde. Vous satisfaire est notre seul priorite.
          </div>
          <div className={styles.btn}>
            Contactez nous
          </div>
        </div>


        <div className={styles.block2}>
          <Image
            src={Picture1}
            className={styles.pic_size}
          />
        </div>
      </div>
    </>
  )
}
