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
                  console.log(transaction);
                  const { date, category, sum, id} = transaction;
                  return (
                   <li key = {id}>
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
