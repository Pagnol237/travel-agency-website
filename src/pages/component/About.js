import styles from './style/about.module.scss'
import Image from 'next/image'
import Picture from './images/concept-voyage-bagages-2.png'
export default function About(){
    return(
        <>
            <div id={styles.about_main}>
                <div className={styles.box1}>
                    <div className={styles.title2}>A PROPOS DE NOUS</div>
                    <div className={styles.texte}> is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also the leap into electronic
                       typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                       with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                       recently with desktop publishing software like Aldus PageMaker including versions 
                       of Lorem Ipsum
                    </div>

                </div>



                <div className={styles.box2} >
                    <Image   src={Picture} className={styles.imageSize} />
                </div>
                
            </div>
        </>
    )
}