import styles from './NavBar.module.scss';
import Container from "../Container/Container";




	const NavBar = () => {
		return (
			<nav className={styles.navbar}>
			  <Container>
				<div className={styles.navigation}>
				<a href="/"><i className={styles.icon + " fa fa-tasks"} aria-hidden="true"></i> </a>
					
				  <ul>
					<li>
					 <a href="/">Home</a>
					</li>
					<li>
					 <a href="/favourite">Favourite</a>
					</li>
					<li> 
					 <a href="/about">About</a>
					</li>
				  </ul>
				</div>
			  </Container>
			</nav>
		  );
	};

	export default NavBar;
