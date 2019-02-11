//Add a description to the data object with the value "A pair of warm, fuzzy socks".
//  Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    data: {
        brand: 'My awesom brand',
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: './img/vmSocks-green.jpeg',
        inStock: true,
        sizes: ['S', 'L', 'XL', 'XXL'],
        cart: 0,
        productVariants: [
            {
                colorId: 2321,
                color: "blue",
                image: "./img/vmSocks-blue.jpeg"
            },
            {
                colorId: 2322,
                color: "green",
                image: "./img/vmSocks-green.jpeg"
            }
        ]
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        }
    },
    methods: {
        incrementCart() {
            this.cart++;
        },
        changeImage(imagePath) {
            this.image = imagePath;
        }
    }
})