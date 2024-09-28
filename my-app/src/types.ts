//todo: update the character interface to take in all parameters!
export interface Character {
    id: number;
    name: string;
    species: string;
    status: string;
    gender: string;
    created: string;
    image: string;
}

interface CharacterLocation {
    name: string;
    url: string;
}

export interface CharacterDetailResponse {
    id: number;
    name: string;
    species: string;
    status: string;
    gender: string;
    created: string;
}