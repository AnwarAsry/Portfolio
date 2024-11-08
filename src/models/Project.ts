export interface Project {
    id: number,
    name: string,
    html_url: string,
    description: string,
    created_at?: Date,
    language: string,
    topics: string[],
    image: string,
}