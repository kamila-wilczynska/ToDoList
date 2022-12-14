import styles from './List.module.scss';
import Column from "../Column/Column";


const List = (props) => {
	return (
		<div>
			<header className={styles.header}>
				<h2 className={styles.title}>Things to do<span className={styles.span}>soon</span></h2>
			</header>
			<p className={styles.description}>  </p>
			<section className={styles.columns}>
				
				<Column title="Books" />
			
				<Column title="Movies" />
				
				<Column title="Games" />
			</section>
		</div>
	);
};

export default List;