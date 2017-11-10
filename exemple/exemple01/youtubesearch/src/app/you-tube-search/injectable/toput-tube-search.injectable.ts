import { ToutTubeSearchService, YOUTUBE_API_KEY, YOUTUBE_API_URL } from './../../tout-tube-search.service';

export const toutTubeSearchInjectables: Array<any> =[
    {provide : ToutTubeSearchService, useClass: ToutTubeSearchService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide : YOUTUBE_API_URL, useValue : YOUTUBE_API_URL}
];
