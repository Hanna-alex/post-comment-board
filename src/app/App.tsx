import { Header, Footer } from '../widgets'
import { ThemeProvider } from '../shared/lib'
import { PostsPage } from '../pages'
import styles from './app.module.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './providers'

function App() {
	return (
		<BrowserRouter>
			<AppRouter />
			<ThemeProvider>
				<Header />
				<main className={styles.main}>
					<PostsPage />
				</main>

				<Footer />
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
