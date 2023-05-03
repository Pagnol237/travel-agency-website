import styles from'./style/scrollbox.module.scss'
export default function ScrollBox(){
    return(
        <>
            <div id={styles.scrollboxMain}>
                <div className={styles.title}>Planifion des maintenan votre prochaine destination</div>
                <div className={styles.btn}>Contactez nous</div>
            </div>
        </>
    )
}