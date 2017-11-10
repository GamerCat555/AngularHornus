/* export class Produc  t { 
    name      : string;
    Image     : string;
    sku     : string;
    Price     : number;
    Categorie :string [];

    constructor(name:string, sku:string, Image:string, Price: number, Categorie?: string []){
        this.name=name;
        this.sku = sku;
        this.Image = Image;
        this.Price = Price || 0;
        this.Categorie = Categorie;
    }
} */

export class Product { 

    constructor(       
        public name      : string,
        public image     : string,
        public sku       : string,
        public price     : number,
        public departement :string [],
        public description :string)
        {
 
    }
}