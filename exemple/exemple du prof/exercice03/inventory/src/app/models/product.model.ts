export class Product {
    constructor(
        public sku: string,
        public name: string,
        public image: string,
        public department: string[],
        public price: number,
        public description?: string
    ) {

    }
}
