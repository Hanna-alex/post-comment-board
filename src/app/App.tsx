import { Header, PostList, Footer } from '../widgets'
import styles from './app.module.css'

function App() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<PostList />
			</main>

			<Footer />
		</>
	)
}

export default App
