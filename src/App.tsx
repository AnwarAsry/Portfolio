import './App.scss'
import { About } from './components/About/About.tsx'
import { Introduction } from './components/Introduction.tsx'
import { ProjectsPresentation } from './components/Projects/ProjectsPresentation.tsx'
import { SectionTitle } from './components/SectionTitle.tsx'

function App() {

	return (
		<>
			<main id="content">
				<Introduction />
				<About />
				<section className="projectsSection">
					<SectionTitle text='Currently working' />
					<ProjectsPresentation />
				</section>
				<section className="projectsSection">
					<SectionTitle text='Past projects' />
					<ProjectsPresentation />
				</section>
			</main>
		</>
	)
}

export default App
