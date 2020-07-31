import { City } from './city';

export interface FileCity {
    "type": string,
    "version": string,
    "features": [City],
    "attribution": string,
    "licence": string,
    "query": string,
    "filters": {
        "type": string
    },
    "limit": number
}