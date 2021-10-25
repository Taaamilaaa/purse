import { GoBackHeader } from "../_share/GoBackHeader/GoBackHeader";

export const BalancePage = ({ closeActivePage, transactions }) => {
    console.log(transactions);
  return (
    <>
      <GoBackHeader
        handelGoBack={closeActivePage}
        title="balance for the year"
      />
          <ul>
              {transactions.map(transaction => {
                  const { date, category, sum } = transaction;
                  return (
                   <li>
          <span>{date}</span>
          <span>{category}</span>
          <span>{sum}</span>
        </li>
               )   
              })}
        
      </ul>
    </>
  );
};
