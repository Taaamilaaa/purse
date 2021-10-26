import styles from './mainPage.module.css'
import { MainInfo } from "../MainInfo/MainInfo"
import { StatisticsBtns } from "../StatisticsBtns/StatisticsBtns" 
import {mainInfoCosts, mainInfoIncomes, mainInfoBalance } from "../assets/data/mainInfoOptions.json"

const MainPage = ({openActivePage}) => {
    return (
        <section>
         <h1 className = {styles.title}>Expense journal</h1>
            <MainInfo  activePage = "costs" openActivePage = {openActivePage} options = {mainInfoCosts } title = "Coasts"/>
            <MainInfo  activePage = "incomes" openActivePage = {openActivePage} options = {mainInfoIncomes} title = "Incomes"/>
            <MainInfo  activePage = "balance" openActivePage = {openActivePage} options = {mainInfoBalance } title="Balance" />
             <StatisticsBtns/>
        </section>
       
       
    )
}

export default MainPage