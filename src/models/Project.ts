export interface Project {
    id: number,
    name: string,
    description: string,
    topics: string[],
    repository: string,
    liveDemo?: string,
    created: string,
    lastUpdated: string,
    languages: string[],
    image: string,
    working: boolean,
}