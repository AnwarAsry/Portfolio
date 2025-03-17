import './App.css'
import { MyTechnologies } from '@components/Technologies/MyTechnologies.tsx'
import { IntroductionCard } from './components/IntroductionCard.tsx'
import { ProjectsSection } from './components/Projects/ProjectsSection.tsx'
import { Project, Status } from '@models/Project.ts'
import projectsData from "./projects.json" assert {type: "json"}

function App() {

	const projects: Project[] = projectsData as Project[];

	const currentProjects = projects.filter(project => project.status === Status.InProgress)
	const pastProjects = projects.filter(project => project.status === Status.Completed)

	return (
		<>

			<main className="max-w-8xl mb-20 px-4 md:px-20 grid grid-cols-1 gap-20">
				<IntroductionCard />
				<MyTechnologies />
				<ProjectsSection title="Currently working" projects={currentProjects} />
				<ProjectsSection title="Past projects" projects={pastProjects} />
			</main>
		</>
	)
}

export default App
