import { useState } from "react";
import { GoBackHeader } from "../_share/GoBackHeader/GoBackHeader";
import { LabelInput } from "../_share/LabelInput/LabelInput";

export const TransactionPage = ({ closeActivePage, transType, addTransaction }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [category, setCategory] = useState("Food");
    const [sum, setSum] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [comment, setComment] = useState("");

    const handelChange = e => {
        const { name, value } = e.target;
        console.log(name, value);
        if (name === "date") {
            setDate(value);
        };
        if (name === "time") {
            setTime(value);
        };
        if (name === "category") {
            setCategory(value);
        };
        if (name === "sum") {
            setSum(value);
        };
        if (name === "currency") {
            setCurrency(value);
        };
        if (name === "comment") {
            setComment(value);
        };
    };
    const handelSubmit = e => {
        e.preventDefault();

        const transaction = [ date, time, category, sum, currency, comment ];
        addTransaction(transaction, transType);
        closeActivePage();
    }
  return (
    <section>
      <GoBackHeader title={transType === "costs" ? "Costs":"Incomes"} handelGoBack={closeActivePage} />
      <form onSubmit = {handelSubmit}>
        <button type="submit">OK</button>
        <LabelInput
          title="Day"
          type="date"
          name="date"
          value={date}
          cbOnChange={handelChange}
        />
        <LabelInput
          title="Time"
          type="time"
          name="time"
          value={time}
          cbOnChange={handelChange}
        />
        <LabelInput
          title="Category"
          type="button"
          name="category"
          value={category}
          cbOnClick={() => {}}
        />
        <LabelInput
          title="Sum"
          placeholder="Enter the sum"
          type="number"
          name="sum"
          value={sum}
          cbOnChange={handelChange}
        />
        <LabelInput
          title="Currency"
          type="button"
          name="currency"
          value={currency}
          cbOnClick={() => {}}
        />
        <LabelInput
          title="Comment"
          placeholder="Your comment"
          name="comment"
          value={comment}
          cbOnChange={handelChange}
        />
      </form>
    </section>
  );
};
