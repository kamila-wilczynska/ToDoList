import styles from "./CardForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from 'react-redux';
//import { addCard } from "../../redux/store";
import { addCard } from "../../redux/store";


const CardForm = (props) => {
  console.log(props)
  const [title, setTitle] = useState("");
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch({ type: 'ADD_CARD', payload: { title, columnId:props.columnId}});
	dispatch(addCard({ title, columnId:props.columnId}));
    setTitle("");
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <div className={styles.padding}><TextInput value={title} onChange={(e) => setTitle(e.target.value)} /></div>
      <div className={styles.padding}><Button>Add card</Button></div>
    </form>
  );
};
export default CardForm;
