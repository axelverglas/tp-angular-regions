export class CityModel {
    constructor(
        public code: string,
        public nom: string,
        public codeDepartement: string,
        public codeRegion: string,
        public codesPostaux: string[],
        public population: number,
    ) { }
}