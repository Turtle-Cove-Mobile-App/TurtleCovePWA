import { Species } from './species';

export class SpeciesClass {
    public className: string;
    public species: Species[];
    public found: number;
    public expanded: boolean;

    constructor(className: string, species: Species[]) {
        this.className = className;
        this.species = species;
        this.expanded = false;
    }
}
