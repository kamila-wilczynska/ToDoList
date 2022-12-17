import styles from './TextInput.module.scss';


/*const TextInput = () => {
	return (
        <form className={styles.searchForm}>
            <TextInput placeholder=”Search…” />
            <button className={styles.button}>Search</button>
        </form>*/
		const TextInput = (props) => {
			return <input className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />
		};

export default TextInput;