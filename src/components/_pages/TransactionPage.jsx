import { useState } from "react";
import { GoBackHeader } from "../_share/GoBackHeader/GoBackHeader";
// import { LabelInput } from "../_share/LabelInput/LabelInput";
import shortid from 'shortid';
import Form from "../_share/Form/Form";
import transactionFormOptions from "../assets/options/transactionFormOptions";

export const TransactionPage = ({ closeActivePage, transType, addTransaction }) => {
   const [form, setForm] = useState({
    date: "",
    time: "",
    category: transType === "incomes" ? "Salary" : "Еда",
    sum: "",
    currency: "USD",
    comment: "",
  });

    const handleChange = e => {
        const { name, value } = e.target;
        console.log(name, value);
       setForm((prevForm) => ({ ...prevForm, [name]: value }));        
    };
    const handleSubmit = () => {
    addTransaction({
      transaction: { ...form, id: shortid.generate() },
      transType,
    });
    closeActivePage();
  };
    
  return (
    <section>
      <GoBackHeader title={transType === "costs" ? "Costs":"Incomes"} handelGoBack={closeActivePage} />
       <Form
        cbOnSubmit={handleSubmit}
        dataForm={form}
        formOptions={transactionFormOptions}
        handleChange={handleChange}
      />
    </section>
  );
};
