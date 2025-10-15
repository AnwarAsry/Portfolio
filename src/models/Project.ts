export interface Project {
    readonly id: number,
    name: string,
    description: string,
    techStack: string[],
    repo: string,
    liveDemo: string | null,
    readonly created: string,
    lastUpdated: string,
    image: string,
    status: Status
}

export enum Status {
    InProgress = "in-progress",
    Completed = "completed",
    Archived = "archived",
}