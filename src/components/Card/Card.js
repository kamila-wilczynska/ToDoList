import styles from "./Card.module.scss";
import { useState } from "react";
//import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleFavouriteCard } from "../../redux/store";

const Card = (props) => {
	const cardId = props.cardId;
	const [favouriteValue, setFavouriteValue] = useState(props.isFavourite);
  
	const dispatch = useDispatch();
  
	const submitClick = (e) => {
	  e.preventDefault();
	  setFavouriteValue(!favouriteValue);
	  dispatch(toggleFavouriteCard(cardId));
	}; 
  
	return (
	  <li className={styles.card}>
		{props.title}{" "}
		<button
		  onClick={submitClick}
		  //className={clsx(styles.button, props.isFavourite && styles.isActive)} //
		  className={styles.button ? 'props.isFavourite' : 'styles.isActive'} 
		>
		  <i className={"fa fa-star"} />
		</button>
	  </li>
	);
  };

export default Card;