import './App.scss'
import { IntroductionCard } from './components/IntroductionCard.tsx'
import { About } from './components/About/About'
import { ProjectsSection } from './components/Projects/ProjectsSection.tsx'
import projects from "./projects.json"

function App() {

	const currentProjects = projects.filter(project => project.working == true)
	const pastProjects = projects.filter(project => project.done == true)

	return (
		<>
			<main id="content">
				<IntroductionCard />
				<About />
				<ProjectsSection title="Currently working" projects={currentProjects} />
				<ProjectsSection title="Past projects" projects={pastProjects} />
			</main>
		</>
	)
}

export default App
