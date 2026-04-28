export type TmdbDateString = string

// Comma (AND) or pipe (OR) separated filters are represented as strings.
export type TmdbFilterExpression = string

export type TmdbWatchMonetizationType =
	| 'flatrate'
	| 'free'
	| 'ads'
	| 'rent'
	| 'buy'

export type TmdbMovieDiscoverSortBy =
	| 'popularity.asc'
	| 'popularity.desc'
	| 'release_date.asc'
	| 'release_date.desc'
	| 'revenue.asc'
	| 'revenue.desc'
	| 'primary_release_date.asc'
	| 'primary_release_date.desc'
	| 'original_title.asc'
	| 'original_title.desc'
	| 'vote_average.asc'
	| 'vote_average.desc'
	| 'vote_count.asc'
	| 'vote_count.desc'

export type TmdbTvDiscoverSortBy =
	| 'popularity.asc'
	| 'popularity.desc'
	| 'first_air_date.asc'
	| 'first_air_date.desc'
	| 'name.asc'
	| 'name.desc'
	| 'original_name.asc'
	| 'original_name.desc'
	| 'vote_average.asc'
	| 'vote_average.desc'
	| 'vote_count.asc'
	| 'vote_count.desc'

export interface TmdbDiscoverMovieQueryParams {
	certification?: string
	'certification.gte'?: string
	'certification.lte'?: string
	certification_country?: string
	include_adult?: boolean
	include_video?: boolean
	language?: string
	page?: number
	primary_release_year?: number
	'primary_release_date.gte'?: TmdbDateString
	'primary_release_date.lte'?: TmdbDateString
	region?: string
	'release_date.gte'?: TmdbDateString
	'release_date.lte'?: TmdbDateString
	sort_by?: TmdbMovieDiscoverSortBy
	'vote_average.gte'?: number
	'vote_average.lte'?: number
	'vote_count.gte'?: number
	'vote_count.lte'?: number
	watch_region?: string
	with_cast?: TmdbFilterExpression
	with_companies?: TmdbFilterExpression
	with_crew?: TmdbFilterExpression
	with_genres?: TmdbFilterExpression
	with_keywords?: TmdbFilterExpression
	with_origin_country?: string
	with_original_language?: string
	with_people?: TmdbFilterExpression
	with_release_type?: TmdbFilterExpression
	'with_runtime.gte'?: number
	'with_runtime.lte'?: number
	with_watch_monetization_types?: TmdbFilterExpression
	with_watch_providers?: TmdbFilterExpression
	without_companies?: TmdbFilterExpression
	without_genres?: TmdbFilterExpression
	without_keywords?: TmdbFilterExpression
	without_watch_providers?: TmdbFilterExpression
	year?: number
}

export interface TmdbDiscoverTvQueryParams {
	'air_date.gte'?: TmdbDateString
	'air_date.lte'?: TmdbDateString
	first_air_date_year?: number
	'first_air_date.gte'?: TmdbDateString
	'first_air_date.lte'?: TmdbDateString
	include_adult?: boolean
	include_null_first_air_dates?: boolean
	language?: string
	page?: number
	screened_theatrically?: boolean
	sort_by?: TmdbTvDiscoverSortBy
	timezone?: string
	'vote_average.gte'?: number
	'vote_average.lte'?: number
	'vote_count.gte'?: number
	'vote_count.lte'?: number
	watch_region?: string
	with_companies?: TmdbFilterExpression
	with_genres?: TmdbFilterExpression
	with_keywords?: TmdbFilterExpression
	with_networks?: number
	with_origin_country?: string
	with_original_language?: string
	'with_runtime.gte'?: number
	'with_runtime.lte'?: number
	with_status?: TmdbFilterExpression
	with_watch_monetization_types?: TmdbFilterExpression
	with_watch_providers?: TmdbFilterExpression
	without_companies?: TmdbFilterExpression
	without_genres?: TmdbFilterExpression
	without_keywords?: TmdbFilterExpression
	without_watch_providers?: TmdbFilterExpression
	with_type?: TmdbFilterExpression
}

export interface TmdbPagedResponse<TItem> {
	page: number
	results: TItem[]
	total_pages: number
	total_results: number
}

export interface TmdbDiscoverMovieResult {
	adult: boolean
	backdrop_path: string | null
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | null
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export interface TmdbDiscoverTvResult {
	backdrop_path: string | null
	first_air_date: string
	genre_ids: number[]
	id: number
	name: string
	origin_country: string[]
	original_language: string
	original_name: string
	overview: string
	popularity: number
	poster_path: string | null
	vote_average: number
	vote_count: number
}

export interface TmdbGenreRequestResult {
    genres: {
        id: number
        name: string
    }[]
}

export type TmdbDiscoverMovieResponse = TmdbPagedResponse<TmdbDiscoverMovieResult>

export type TmdbDiscoverTvResponse = TmdbPagedResponse<TmdbDiscoverTvResult>

export interface TmdbMovieDetails {
	adult: boolean
	backdrop_path: string | null
	belongs_to_collection: {
		id: number
		name: string
		poster_path: string | null
		backdrop_path: string | null
	} | null
	budget: number
	genres: Array<{
		id: number
		name: string
	}>
	homepage: string | null
	id: number
	imdb_id: string | null
	origin_country: string[]
	original_language: string
	original_title: string
	overview: string | null
	popularity: number
	poster_path: string | null
	production_companies: Array<{
		id: number
		logo_path: string | null
		name: string
		origin_country: string
	}>
	production_countries: Array<{
		iso_3166_1: string
		name: string
	}>
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: Array<{
		english_name: string
		iso_639_1: string
		name: string
	}>
	status: string
	tagline: string | null
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}
export interface TmdbTvDetails {
	adult: boolean
	backdrop_path: string | null
	created_by: Array<{
		id: number
		credit_id: string
		name: string
		gender: number
		profile_path: string | null
	}>
	episode_run_time: number[]
	first_air_date: string
	genres: Array<{
		id: number
		name: string
	}>
	homepage: string | null
	id: number
	in_production: boolean
	languages: string[]
	last_air_date: string | null
	last_episode_to_air: {
		id: number
		name: string
		overview: string
		vote_average: number
		vote_count: number
		air_date: string
		episode_number: number
		production_code: string
		runtime: number
		season_number: number
		show_id: number
		still_path: string | null
	} | null
	name: string
	next_episode_to_air: string | null
	networks: Array<{
		id: number
		logo_path: string | null
		name: string
		origin_country: string
	}>
	number_of_episodes: number
	number_of_seasons: number
	origin_country: string[]
	original_language: string
	original_name: string
	overview: string | null
	popularity: number
	poster_path: string | null
	production_companies: Array<{
		id: number
		logo_path: string | null
		name: string
		origin_country: string
	}>
	production_countries: Array<{
		iso_3166_1: string
		name: string
	}>
	seasons: Array<{
		air_date: string
		episode_count: number
		id: number
		name: string
		overview: string
		poster_path: string | null
		season_number: number
		vote_average: number
	}>
	spoken_languages: Array<{
		english_name: string
		iso_639_1: string
		name: string
	}>
	status: string
	tagline: string | null
	type: string
	vote_average: number
	vote_count: number
}
