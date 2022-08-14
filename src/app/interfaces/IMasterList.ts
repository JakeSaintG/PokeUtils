export interface IMasterListResults {
    count: number
    next: null
    previous: null
    results: IMasterListResult[]
}

export interface IMasterListResult {
    name: string
    url: string
};