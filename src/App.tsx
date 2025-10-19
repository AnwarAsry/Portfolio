import "./App.css";
import { Container } from "@components/Container.tsx";
import { SmallContainer } from "@components/SmallContainer.tsx";
import { Label } from "@components/Label.tsx";
import { TechSkill } from "@components/Technologies/TechSkill";

import reactIMG from "@assets/icons/react-2.svg";
import nodejsIMG from "@assets/icons/nodejs-3.svg";
import gitIMG from "@assets/icons/git-icon.svg";
import tsIMG from "@assets/icons/ts-logo-512.svg";
import cssIMG from "@assets/icons/css-3.svg";
import htmlIMG from "@assets/icons/html-1.svg";
import mongodbIMG from "@assets/icons/mongodb.svg";
import sqlIMG from "@assets/icons/mysql-logo-pure.svg";
import nextIMG from "@assets/icons/nextjs.svg";
import tailwindIMG from "@assets/icons/tailwind-css-2.svg";
import viteIMG from "@assets/icons/vitejs.svg";
import javaIMG from "@assets/icons/java.svg";
import profile from "@assets/Images/dev.jpeg";

import linkedin from "@assets/icons/linkedin.svg";

import swedish from "@assets/icons/swedish.svg";
import english from "@assets/icons/english.svg";

import { IoGameControllerOutline } from "react-icons/io5";
import { RiPlantLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { Link } from "react-router";

const techStack = [
	{ img: reactIMG, tooltipText: "React" },
	{ img: nodejsIMG, tooltipText: "Node.js" },
	{ img: gitIMG, tooltipText: "Git" },
	{ img: tsIMG, tooltipText: "TypeScript" },
	{ img: cssIMG, tooltipText: "CSS" },
	{ img: htmlIMG, tooltipText: "HTML" },
	{ img: mongodbIMG, tooltipText: "MongoDB" },
	{ img: sqlIMG, tooltipText: "SQL" },
	{ img: nextIMG, tooltipText: "Next.js" },
	{ img: tailwindIMG, tooltipText: "Tailwind CSS" },
	{ img: viteIMG, tooltipText: "Vite" },
	{ img: javaIMG, tooltipText: "Java" },
]


function App() {
	return <>
		<section className="max-w-4xl h-fit mx-auto grid 
			grid-cols-1
			md:grid-cols-[auto_1fr_1fr]
			gap-3.5"
		>
			{/* Profile Image */}
			<Container className="flex justify-center items-center
				col-start-1"
			>
				<img
					className="w-40 h-40 rounded-full object-cover"
					src={profile}
					alt="Portrait of Anwar Asry, frontend developer"
				/>
			</Container>

			{/* Introduction card */}
			<Link to="/about" className="row-start-2 md:col-start-2 md:col-span-2 md:row-start-1">
				<Container>
					<p className="flex items-center space-x-3 text-md text-gray-400">
						<span className="uppercase font-bold">
							Frontend Developer
						</span>
						<span>•</span>
						<span className="flex items-center gap-2">
							<FaMapMarkerAlt className="text-red-500" />
							Stockholm, Sweden
						</span>
					</p>
					<h1 className="my-2 text-4xl font-bold">Anwar Asry</h1>
					<p className="text-xl text-gray-400">
						I’m a curious frontend developer who loves learning new things and improving my skills. Currently I'm studying to become a Java developer.
					</p>
					<div className="w-full flex justify-end">
						<PiArrowFatLinesRightFill className="size-6 text-gray-400" />
					</div>
				</Container>
			</Link>

			{/* Quote */}
			<Container className="!bg-blue-500 
				row-start-3
				md:col-span-3 md:row-start-2
				lg:col-span-2"
			>
				<p className="h-full flex items-center justify-center text-2xl text-center font-bold">
					“Age adds years, but only mistakes add wisdom.”
				</p>
			</Container>

			{/* TechStack */}
			<Container className="
				row-start-4
				md:col-span-3 md:row-start-3
	      		lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-3"
			>
				<h2 className="text-2xl font-bold">TechStack</h2>
				<div className="w-full mt-3 grid grid-cols-5 gap-3">
					{techStack.map((tech, index) => (
						<TechSkill key={index} {...tech} />
					))}
				</div>
			</Container>

			{/* Interests */}
			<Container className="
				row-start-5
				md:col-span-3 md:row-start-4
				lg:col-span-2 lg:row-start-3"
			>
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

			{/* Languages */}
			<Container className="
	      		row-start-6
				md:col-span-3 md:row-start-5
				lg:col-span-2 lg:row-start-4"
			>
				<SmallContainer title="Languages">
					<img className="w-10" src={swedish} alt="Swedish Flag" />
					<img className="w-10" src={english} alt="English Flag" />
				</SmallContainer>
			</Container>

			{/* Contact */}
			<Container className="
				row-start-7
				md:col-span-3 md:row-start-6
				lg:col-span-3 lg:row-start-5"
			>
				<SmallContainer title="Contact">
					<a href="mailto:anwarasry@icloud.com">
						<Label>
							<HiOutlineMail className="size-7" />
							anwarasry@icloud.com
						</Label>
					</a>
					<a href="https://www.linkedin.com/in/anwar-asry-b1ba6521a" target="_blank" aria-label="Linkedin profile">
						<Label>
							<img className="size-7" src={linkedin} alt="LinkedIn Logo" />
							LinkedIn
						</Label>
					</a>
					<a href="https://github.com/anwarasry" target="_blank" aria-label="GitHub profile">
						<Label>
							<FiGithub className="size-7" />
							Github
						</Label>
					</a>
				</SmallContainer>
			</Container>
		</section>
	</>;
}

export default App;
