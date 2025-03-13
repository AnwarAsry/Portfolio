import './App.css'
import { IntroductionCard } from './components/IntroductionCard.tsx'
import { About } from './components/About/About'
import { ProjectsSection } from './components/Projects/ProjectsSection.tsx'
import projects from "./projects.json"

function App() {

	const currentProjects = projects.filter(project => project.working == true)
	const pastProjects = projects.filter(project => project.done == true)

	return (
		<>
			<main className="flex flex-col gap-12 lg:gap-24 sm:gap-16">
				<IntroductionCard />
				<About />
				<ProjectsSection title="Currently working" projects={currentProjects} />
				<ProjectsSection title="Past projects" projects={pastProjects} />
			</main>
		</>
	)
}

export default App
