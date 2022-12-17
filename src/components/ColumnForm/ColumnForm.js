import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from "../Button/Button";



const ColumnForm = props => {

	const [title, setTitle] = useState('');
	const [icon, setIcon] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		props.action({ title: title, icon: icon });
		setTitle('');
		setIcon('')
	}

	return (
		<form className={styles.columnForm} onSubmit={handleSubmit}>
			<div className={styles.inputBox}>
			Title: <input  type="text" value={title} onChange={e => setTitle(e.target.value)} />
			</div>
			<div className={styles.inputBox}>
			Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
			</div>
			<div className={styles.inputBox}>
			<Button>Add column</Button>
			</div >
		</form >
	);
};

export default ColumnForm;