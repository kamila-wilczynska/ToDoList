//import Hero from './components/Hero/Hero.js';
//import SearchForm from './components/SearchForm/SearchForm.js';
//import List from './components/List/List.js';
import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import About from "./components/About/About";
import Favourite from "./components/Favourite/Favourite"
//import PageTitle from './components/PageTitle/PageTitle.js';
import Home from './components/Home/Home.js';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.js';
import List from './components/List/List.js';

const App = () => {

	return (
		<main>
			<NavBar />
			
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/favourite" element={<Favourite />} />
					<Route path="/list/:listId" element={<List />} />
					<Route path='*' element={<NotFound />}/>
				</Routes>
			
		</main>
	)
};

export default App;
