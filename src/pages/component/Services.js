import styles from './style/services.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import Picture1 from './images/service1.png'
import Picture2 from "../component/images/services2.PNG"
import Picture3 from './images/service4.png'
import Picture4 from './images/service3.png'


export default function Services(){
    const [data,setData]= useState([
        {
            title:'Vente de biellets d\'avion',
            Pic:Picture1,
            text:'Reservation et emision de biellet a des prix defian toute concurence nous somme disponibles 24/7 pour vous assurer la meilleur experience possible '
        },
        {
            title:'Assistance visa',
            Pic:Picture2,
            text:'Assistance visa touristique Dubai/France/Belgique/Canada , visa etudiant Belgique/Canada/France ,visa travailleur soins infimiers Allemagne'
        },
       {
        title:'reservation d\'hôtel',
        Pic:Picture3,
        text:'Besoin d\’une réservation d\’hôtel ? Nous sommes là pour vous trouver le logement de vos rêves, toujours à des prix defiant toute concurence'
       },
       {
        title:'Location de vehicule',
        Pic:Picture4,
        text:'Réservez votre navette entre les aéroports et les hôtels de la ville de Yaoundé ou Douala.Transferts en voiture ou en minibus climatisés, location de voiture avec chauffeur'
       }
    ])
    return(
        <>
            
            <div id={styles.sercices_main}>
                <div className={styles.title2}>Nos services</div>
                <div className={styles.grille_box}>
                    {data.map((infos,index)=>(
                        <div className={styles.box} key={index}>
                            <Image src={infos.Pic} className={styles.photo} />
                            <div className={styles.title}>{infos.title} </div>    
                            <div className={styles.texte}>{infos.text} </div>    
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}