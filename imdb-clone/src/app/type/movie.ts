export type Movie = {
    id:  number,
    backdrop_path: string,
    genre_ids:number[],
    original_language: string,
    original_title:string,
    overview:string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title:string,
    vote_average: number,
    vote_count: number
}
export type MovieDto = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results:number
}