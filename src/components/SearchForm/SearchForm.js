import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';
//import { searchInputValue } from "../../redux/store";
//import { useSelector } from "react-redux";

const SearchForm = (props) => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');

	
	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(updateSearchString( search ));
		setSearch('');
	};
	return (
		<form className={styles.searchForm} onSubmit={handleSearch}>
			<TextInput placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
			<Button>
				<span className='fa fa-search' />
			</Button>
		</form>
	);
	
};

export default SearchForm;