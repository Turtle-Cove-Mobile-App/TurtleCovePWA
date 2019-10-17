import { Species } from './species';

export class AnimalClass {
    public className: string;
    public species: Species[];
    public expanded: boolean;

    constructor(className: string, species: Species[]) {
        this.className = className;
        this.species = species;
        this.expanded = false;
    }
}
