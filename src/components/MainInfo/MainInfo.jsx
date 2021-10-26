import styles from './mainInfo.module.css';

export const MainInfo = ({ title, currency = "USD", options, openActivePage, activePage}) => {
    const handleClick = ()=> openActivePage(activePage)
    return (
        <section className = {styles.section}>
            <h2 className = {styles.title}>{title}</h2>
            <p className = {styles.currency}>{currency}</p>
            <ul className = {styles.list}>
                {options.map(({ period, sum, name }) => 
                (<li className = {styles.listItem} key={name}>
                    <span className={styles.period}>{period}</span>
                    <span className = {styles.sum}>{sum}</span>
                 </li> )  
                )}
            </ul>
            <button className = {styles.addBtn} onClick={handleClick} type = "button">+</button>
    </section>
)
}