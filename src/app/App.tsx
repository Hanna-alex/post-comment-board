import { Header, Footer } from '../widgets'
import { ThemeProvider } from '../shared/lib'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppRouter } from './providers'
import { store } from './providers'
import styles from './app.module.css'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider>
					<Header />
					<main className={styles.main}>
						<AppRouter />
					</main>

					<Footer />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	)
}

export default App
