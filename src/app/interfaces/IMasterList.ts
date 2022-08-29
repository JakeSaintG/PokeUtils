export interface IListResults {
    count: number
    next: null
    previous: null
    results: IListResult[]
}

export interface IListResult {
    name: string
    url: string
};