import { useContext } from "react";
import { Actions } from "../contexts/Actions";

export default function NewActionForm() {
  const { actions, setActions } = useContext(Actions);
  setActions([...actions, { amount: 20, date: new Date() }]);
  return (
    <>
      {
        actions.map((el) => {
          return <div key={Date.now()}>
            <p>{el.amount}</p>
            <p>{el.date}</p>
          </div>;
        })
      }
    </>
  );
}
