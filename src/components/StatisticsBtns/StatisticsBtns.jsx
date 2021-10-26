import styles from './statisticsBtn.module.css'

export const StatisticsBtns = () => {
    return (
        <div className={styles.btnSection}>
            <button className={styles.btn }type ="button">Costs</button>
            <button className={styles.btn } type ="button">Incomes</button>
        </div>
    )
}