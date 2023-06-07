export class Product {
    constructor (  
        public id: number,
        public title: string,
        public description: string,
        public price: number,
        public company: string,
        public img: string,
        public likes: number,
        public quantity: number) {
            this.id = id
            this.description = description
            this.title = title
            this.company = company
            this.img = img
            this.likes = likes
            this.quantity = quantity
        }
    }
    