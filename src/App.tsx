import './App.scss'
import { About } from './components/About/About.tsx'
// import { Landing } from './components/Landing/Landing.tsx'
import { Introduction } from './components/Introduction.tsx'
import { Projects } from './components/Projects/Projects.tsx'
import { SectionTitle } from './components/SectionTitle.tsx'

function App() {

	return (
		<>
			{/* <Landing /> */}
			<main id="content">
				<Introduction />
				<About />
				<section>
					<SectionTitle text='Currently working' />
					<Projects />
				</section>
				<section>
					<SectionTitle text='Past projects' />
					<Projects />
				</section>
			</main>
		</>
	)
}

export default App
