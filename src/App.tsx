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
import mongodbIMG from "@assets/icons/mongodb-icon-2.svg";
import sqlIMG from "@assets/icons/mysql-logo-pure.svg";
import nextIMG from "@assets/icons/next-js.svg";
import tailwindIMG from "@assets/icons/tailwind-css-2.svg";
import viteIMG from "@assets/icons/vitejs.svg";
import profile from "@assets/Images/profile.jpeg";
import plantIMG from "@assets/Images/kinakal.jpeg";

import sweden from "../public/icons/sweden.png";

import { IoGameControllerOutline } from "react-icons/io5";
import { RiPlantLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { LiaLinkedin } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiArrowFatLinesRightFill } from "react-icons/pi";


function App() {
	return <>
		<section className="w-3/4 h-fit mx-auto mb-20 grid gap-[14px]">
			<img
				className="w-130 h-60 rounded-2xl object-cover col-start-2 row-start-3"
				src={profile}
				alt="Picture of developer"
			/>

			{/* Introduction card */}
			<Container style="col-span-2 row-span-2 col-start-1 row-start-1">
				<span className="uppercase font-bold text-sm text-[#7f7f7f]">
					A Frontend Developer
				</span>
				<h1 className="text-4xl font-bold">Anwar Asry</h1>
				<span className="my-2 flex items-center gap-2 text-md text-[#7f7f7f]">
					<FaMapMarkerAlt className="text-red-500" />
					Stockholm, Sweden
				</span>
				<p className="text-lg text-[#8d8c8d]">
					I’m always looking to learn more and grow as a developer.
				</p>
				<div className="w-full flex justify-end">
					<PiArrowFatLinesRightFill className="size-6 text-[#8d8c8d]" />
				</div>
			</Container>

			{/* TechStack */}
			<Container style="row-span-3 col-start-1 row-start-3">
				<h2 className="text-2xl font-bold">TechStack</h2>
				<div className="w-full mt-3 flex flex-wrap gap-4">
					<TechSkill img={reactIMG} main />
					<TechSkill img={nodejsIMG} />
					<TechSkill img={gitIMG} />
					<TechSkill img={tsIMG} />
					<TechSkill img={cssIMG} />
					<TechSkill img={htmlIMG} />
					<TechSkill img={mongodbIMG} />
					<TechSkill img={sqlIMG} />
					<TechSkill img={nextIMG} />
					<TechSkill img={tailwindIMG} />
					<TechSkill img={viteIMG} />
				</div>
			</Container>

			{/* Quote */}
			<Container style="col-start-3 row-start-1 bg-blue-500">
				<p className="text-2xl font-bold">
					“Age adds years, but only mistakes add wisdom.”
				</p>
			</Container>

			{/* Plant Image */}
			<div className="bg-red-300 row-span-2 col-start-3 row-start-2">
				{/* <img className="w-full h-100 rounded-2xl object-cover row-span-2 col-start-3 row-start-2"
					src={plantIMG}
					alt="dj"
				/> */}
			</div>

			{/* Interests */}
			<Container style="col-span-2 col-start-2 row-start-4">
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
			<Container style="col-span-2 col-start-2 row-start-5">
				<SmallContainer title="Languages">
					<img src={sweden} alt="Swedish Flag" />
					<img src={sweden} alt="Swedish Flag" />
					<img src={sweden} alt="Swedish Flag" />
				</SmallContainer>
			</Container>
			<Container style="col-span-3">
				<SmallContainer title="Contact">
					<a href="mailto:anwarasry@icloud.com">
						<Label>
							<HiOutlineMail className="size-7" />
							anwarasry@icloud.com
						</Label>
					</a>
					<a href="https://www.linkedin.com/in/anwar-asry-b1ba6521a" target="_blank">
						<Label>
							<LiaLinkedin className="size-7" />
						</Label>
					</a>
					<a href="https://github.com/anwarasry" target="_blank">
						<Label>
							<FiGithub className="size-7" />
						</Label>
					</a>
				</SmallContainer>
			</Container>
		</section>
	</>;
}

export default App;
