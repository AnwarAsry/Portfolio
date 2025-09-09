import './App.css'
import { Project, Status } from '@models/Project.ts'
import projectsData from "./projects.json" assert {type: "json"}
import { Container } from '@components/Container.tsx'
import { SmallContainer } from '@components/SmallContainer.tsx'
import sweden from '../public/icons/sweden.png'
import { Label } from '@components/Label.tsx'
import { IoGameControllerOutline } from 'react-icons/io5'
import { RiPlantLine } from 'react-icons/ri'
import { Navbar } from '@components/Navbar'

function App() {

	const projects: Project[] = projectsData as Project[];

	const currentProjects = projects.filter(project => project.status === Status.InProgress)
	const pastProjects = projects.filter(project => project.status === Status.Completed)

	// const experience: Experience[] = [];

	return (
		<>
			{/* <Container>
				<IntroductionCard />
			</Container> */}
			{/* <Container>
				<SmallContainer title="Interests">
					<Label>
						<IoGameControllerOutline className="size-7" />
						<p>Gaming</p>
					</Label>
					<Label>
						<RiPlantLine className="size-7" />
						<p>Gardening</p>
					</Label>
				</SmallContainer>
			</Container>
			<Container>
				<SmallContainer title="Languages">
					<img src={sweden} alt="Swedish Flag" />
					<img src={sweden} alt="Swedish Flag" />
					<img src={sweden} alt="Swedish Flag" />
				</SmallContainer>
			</Container> */}

			<header className="w-full py-6 flex justify-center">
				<Navbar />
			</header>

			{/* <main className="max-w-8xl mb-20 px-4 md:px-20 grid grid-cols-1 gap-20">

				My TechStack
				<MyTechnologies />

				Experience
				<ExperienceSection exp={experience} />

				Current working projects
				<ProjectsSection title="Currently working" projects={currentProjects} />

				Past worked projects
				<ProjectsSection title="Past projects" projects={pastProjects} />
			</main> */}
		</>
	)
}

export default App
