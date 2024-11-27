import './App.scss'
import { About } from './components/About/About.tsx'
import { Introduction } from './components/Introduction.tsx'
import { ProjectsPresentation } from './components/Projects/ProjectsPresentation.tsx'
import { SectionTitle } from './components/SectionTitle.tsx'
import projects from "./projects.json"

function App() {

	return (
		<>
			<main id="content">
				<Introduction />
				<About />
				<section className="projectsSection">
					<SectionTitle text='Currently working' />
					<ProjectsPresentation projects={projects} />
				</section>
				<section className="projectsSection">
					<SectionTitle text='Past projects' />
					<ProjectsPresentation projects={projects} />
				</section>
			</main>
		</>
	)
}

export default App
