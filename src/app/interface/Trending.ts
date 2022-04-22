export interface Trending extends MovieSerieBase {
    adult?:            boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title?:   string;
    overview:          string;
    poster_path:       string;
    release_date?:     Date;
    title?:            string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    popularity:        number;
    media_type:        string;
    first_air_date?:   Date;
    original_name?:    string;
    origin_country?:   string[];
    name?:             string;
}

export interface MovieSerieBase {
    idGlobal: string;
    id: number;
    title?: string;
    media_type: string;
    name?: string;
    poster_path: string;
    vote_average: number;
}

export interface MovieSerieUser extends MovieSerieBase {
    idUser: string;
}
