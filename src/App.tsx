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

const techStack = [
	{ img: reactIMG, tooltipText: "React", main: true },
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
		<section className="max-w-6xl h-fit mx-auto grid gap-[14px]">
			<div className="w-20 md:w-50 lg:w-100 h-20 md:h-40 lg:h-80 col-start-1 col-end-2 row-start-1 row-end-3">
				<img
					className="w-full h-full rounded-full md:rounded-2xl object-cover"
					src={profile}
					alt="Portrait of Anwar Asry, frontend developer"
				/>
			</div>

			{/* Introduction card */}
			<Container className="col-start-2 col-end-4">
				<span className="uppercase font-bold text-sm text-[#7f7f7f]">
					A Frontend Developer
				</span>
				<h1 className="text-4xl font-bold">Anwar Asry</h1>
				<span className="my-2 flex items-center gap-2 text-md text-[#7f7f7f]">
					<FaMapMarkerAlt className="text-red-500" />
					Stockholm, Sweden
				</span>
				<p className="text-lg text-[#8d8c8d]">
					I’m a curious frontend developer who loves learning new things and improving my skills. Currently I'm studying to become a Java developer.
				</p>
				<div className="w-full flex justify-end">
					<PiArrowFatLinesRightFill className="size-6 text-[#8d8c8d]" />
				</div>
			</Container>

			{/* Quote */}
			<Container className="col-start-1 lg:col-start-2 col-end-4 row-start-2 bg-blue-500">
				<p className="h-full flex items-center justify-center text-2xl font-bold">
					“Age adds years, but only mistakes add wisdom.”
				</p>
			</Container>

			{/* Interests */}
			<Container className="col-start-1 col-end-3 row-start-3">
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
			<Container className="col-start-1 col-end-3 row-start-4">
				<SmallContainer title="Languages">
					<img className="w-10" src={swedish} alt="Swedish Flag" />
					<img className="w-10" src={english} alt="English Flag" />
				</SmallContainer>
			</Container>

			{/* TechStack */}
			<Container className="col-start-1 lg:col-start-3 row-start-5 lg:row-start-3 row-end-5">
				<h2 className="text-2xl font-bold">TechStack</h2>
				<div className="w-full mt-3 grid grid-cols-5 gap-3">
					{techStack.map((tech, index) => (
						<TechSkill key={index} {...tech} />
					))}
				</div>
			</Container>

			{/* Contact */}
			<Container className="col-start-1 col-end-4 row-start-6 lg:row-start-5">
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
							{/* <LiaLinkedin className="size-7" /> */}
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
