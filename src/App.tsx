import './App.css'
import { IntroductionCard } from './components/IntroductionCard.tsx'
import { ProjectsSection } from './components/Projects/ProjectsSection.tsx'
import projects from "./projects.json"

function App() {

	const currentProjects = projects.filter(project => project.working == true)
	const pastProjects = projects.filter(project => project.done == true)

	return (
		<>
			{/* <main className="flex flex-col gap-12 lg:gap-24 sm:gap-16">
				<IntroductionCard />
				<ProjectsSection title="Currently working" projects={currentProjects} />
				<ProjectsSection title="Past projects" projects={pastProjects} />
			</main> */}
			<main className="max-w-8xl mb-20 px-4 md:px-20 grid grid-cols-1 gap-20">
				<IntroductionCard />
				<ProjectsSection title="Currently working" projects={currentProjects} />
				<ProjectsSection title="Past projects" projects={pastProjects} />
			</main>
		</>
	)
}

export default App
