import './App.css'
import { MyTechnologies } from '@components/Technologies/MyTechnologies.tsx'
import { IntroductionCard } from './components/IntroductionCard.tsx'
import { ProjectsSection } from './components/Projects/ProjectsSection.tsx'
import { Project, Status } from '@models/Project.ts'
// import { Experience } from '@models/Experience.ts'
// import { ExperienceSection } from '@components/Experience/ExperienceSection.tsx'
import projectsData from "./projects.json" assert {type: "json"}

function App() {

	const projects: Project[] = projectsData as Project[];

	const currentProjects = projects.filter(project => project.status === Status.InProgress)
	const pastProjects = projects.filter(project => project.status === Status.Completed)

	// const experience: Experience[] = [];

	return (
		<>
			<main className="max-w-8xl mb-20 px-4 md:px-20 grid grid-cols-1 gap-20">
				{/* Introduction with Image */}
				<IntroductionCard />

				{/* My TechStack */}
				<MyTechnologies />

				{/* Experience */}
				{/* <ExperienceSection exp={experience} /> */}

				{/* Current working projects */}
				<ProjectsSection title="Currently working" projects={currentProjects} />

				{/* Past worked projects */}
				<ProjectsSection title="Past projects" projects={pastProjects} />
			</main>
		</>
	)
}

export default App
