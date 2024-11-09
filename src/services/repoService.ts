import { Project } from "../models/Project";
import { ResponseRepo } from "../models/responses/responseRepo";
import { get } from "./serviceBase";

const BASE_URL = `https://api.github.com/users/AnwarAsry/repos`;

export const getRepos = async (): Promise<Project[]> => {
    try {
        const response = await get<ResponseRepo>(`${BASE_URL}`);
        console.log(response);

        return response.data;
    } catch (error) {
        console.log("Error:", error)
        throw error
    }
};