import './App.scss'
import { About } from './components/About/About.tsx'
// import { Landing } from './components/Landing/Landing.tsx'
import { Header } from './components/Header/Header.tsx'
import { Introduction } from './components/Introduction.tsx'

function App() {

	return (
		<>
			<Header />
			{/* <Landing /> */}
			<main id="content">
				<Introduction />
				<About />
			</main>
		</>
	)
}

export default App
