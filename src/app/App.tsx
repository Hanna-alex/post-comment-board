import { ThemeProvider } from '../shared/lid'
import { Header, PostList, Footer } from '../widgets'
import styles from './app.module.css'

function App() {
	return (
		<ThemeProvider>
			<Header />
			<main className={styles.main}>
				<PostList />
			</main>

			<Footer />
		</ThemeProvider>
	)
}

export default App
