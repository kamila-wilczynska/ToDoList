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
				
				<Column icon={['fa fa-book']} title="Books" />
			
				<Column icon={['fa fa-film']} title="Movies" />
				
				<Column  icon={['fa fa-gamepad']} title="Games" />
			</section>
		</div>
	);
};

export default List;