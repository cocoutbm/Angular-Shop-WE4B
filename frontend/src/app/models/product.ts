export class Product {
    constructor(
      public productID: number,
      public category: string,
      public image: string,
      public name: string,
      public description: string,
      public brand: string,
      public stock: number,
      public price: number,
    ) {}
  }
  