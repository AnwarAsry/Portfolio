import './App.scss'
import { About } from './components/About/About.tsx'
import { Introduction } from './components/Introduction.tsx'
import { ProjectsPresentation } from './components/Projects/ProjectsPresentation.tsx'
import { SectionTitle } from './components/SectionTitle.tsx'
import projects from "./projects.json"

function App() {

	const currentProjects = projects.filter(project => project.working == true)
	const pastProjects = projects.filter(project => project.working == false)

	return (
		<>
			<main id="content">
				<Introduction />
				<About />
				<section className="projectsSection">
					<SectionTitle text='Currently working' />
					<ProjectsPresentation projects={currentProjects} />
				</section>
				<section className="projectsSection">
					<SectionTitle text='Past projects' />
					<ProjectsPresentation projects={pastProjects} />
				</section>
			</main>
		</>
	)
}

export default App
