import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';
import { useParams, Navigate } from 'react-router';
import SearchForm from './../SearchForm/SearchForm';

const List = (props) => {
	//useParams zwraca nam po prostu obiekt z parametrami adresu
	const { listId } = useParams();
	const columns = useSelector((state) => getColumnsByList(state, listId));
	//display just with the id 1 
	const listData = useSelector((state) => getListById(state, listId));
	if(!listData) return <Navigate to="/" />
	return (
		<>
		<div className={styles.list}>
		  <header className={styles.header}>
			<h2 className={styles.title}>
			  {listData.title}
			</h2>
		  </header>
		  <p className={styles.description}>{listData.description}</p>
		  <SearchForm />
		  <section className={styles.columns}>
			{columns.map((column) => (
			  <Column key={column.id} {...column} />
			))}
		  </section>
		  
		  <ColumnForm listId={listId} />
		</div>
		</>
	  );
};

export default List;