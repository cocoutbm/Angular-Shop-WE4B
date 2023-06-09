export class Product {
    constructor(
      public id: number,
      public category: string,
      public description: string,
      public image: string,
      public name: string,
      public brand: string,
      public stock: number,
      public price: number,
    ) {
      this.id = id
      this.category = category
      this.description = description
      this.image = image
      this.name = name
      this.brand = brand
      this.stock = stock
      this.price = price
    }
  }
  