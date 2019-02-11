//Add a description to the data object with the value "A pair of warm, fuzzy socks".
//  Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    data: {
        brand: 'My awesom brand',
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        selectedProduct: 0,
        sizes: ['S', 'L', 'XL', 'XXL'],
        cart: 0,
        onSale: true,
        productVariants: [
            {
                id: 2321,
                color: "blue",
                image: "./img/vmSocks-blue.jpeg",
                inventary: 0
            },
            {
                Id: 2322,
                color: "green",
                image: "./img/vmSocks-green.jpeg",
                inventary: 10
            }
        ]
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        },
        image() {
            return this.productVariants[this.selectedProduct].image;
        },
        inStock() {
            return this.productVariants[this.selectedProduct].inventary;
        },
        sale() {
            if (this.onSale) {
                return this.title + ' is On Sale!';
            } else {
                return this.title + ' is not On Sale!';
            }
        }
    },
    methods: {
        incrementCart() {
            this.cart++;
        },
        changeSelectedProduct(index) {
            this.selectedProduct = index;
        }
    }
})