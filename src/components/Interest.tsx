import { Label } from "./Label"
import { IoGameControllerOutline } from "react-icons/io5";
import { RiPlantLine } from "react-icons/ri";

export const Interest = () => {
    return (
        <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Interests</h2>
            <hr className="w-1 h-12 rounded-full bg-[#303031] border-0" />
            <Label>
    			<IoGameControllerOutline className="size-7" />
    			<p>Gaming</p>
  			</Label>
  			<Label>
    			<RiPlantLine className="size-7" />
    			<p>Gardening</p>
  			</Label>
		</div>
    )
}