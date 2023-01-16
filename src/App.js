import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SearchForm.js';
import List from './components/List/List.js';
import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import About from "./components/About/About";
import Favourite from "./components/Favourite/Favourite"
import PageTitle from './components/PageTitle/PageTitle.js';

const App = () => {
	return (
		<main>
			<NavBar />
			<Container>

				<Hero />
				<PageTitle/>
				<SearchForm />
				<List />
				<About />
				<Favourite />

			</Container>
		</main>
	);
};

export default App;
