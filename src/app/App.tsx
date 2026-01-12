import { Header, Footer } from '../widgets'
import { ThemeProvider } from '../shared/lib'
import { PostsPage } from '../page'
import styles from './app.module.css'

function App() {
	return (
		<ThemeProvider>
			<Header />
			<main className={styles.main}>
				<PostsPage />
			</main>

			<Footer />
		</ThemeProvider>
	)
}

export default App
