export class Species {
    public id: number;
    public name: string;
    public nomenclature: string;
    public checked: boolean;
    
    constructor(id: number, name: string, nomenclature: string) {
        this.id = id;
        this.name = name;
        this.nomenclature = nomenclature;
        this.checked = false;
    }
}
