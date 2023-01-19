import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';

const List = () => {
	const columns = useSelector((state) => getColumnsByList(state, 1));
	//display just with the id 1 
	const listData = useSelector((state) => getListById(state, 1));

	return (
		<div className={styles.list}>
			<header className={styles.header}>
				<h2 className={styles.title}>
				{listData.title}
				</h2>
			</header>
			<p className={styles.description}>Interesting things I want to check out</p>
			<section className={styles.columns}>
				{columns.map((column) => (
					<Column key={column.id} {...column} />
				))}
			</section>
			<ColumnForm />
		</div>
	);
};

export default List;