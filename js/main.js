//Add a description to the data object with the value "A pair of warm, fuzzy socks".
//  Then display the description using an expression in an p element, underneath the h1.
Vue.component('product', {
    template: `<div class="product">
    <div class="product-image">
        <img :src="image" />
    </div>
    <div class="product-info">
        <h1 v-text="title"></h1>
        <p>{{ description }}</p>
        <span v-if="inStock">In Stock</span>
        <span v-else :class="{outOfStock: !inStock}">Out of Stock</span>
        <p v-text="sale"></p>
        <p>Colors:</p>
        <div v-for="(product, index) in productVariants" class="color-box" :style="{backgroundColor: product.color}"
            :key="product.id" @mouseover="changeSelectedProduct(index)"></div>
        <p>Avalible sizes:</p>
        <ul v-for="size in sizes">
            <li v-text="size"></li>
        </ul>
        <button v-on:click="incrementCart" :class="{ disabledButton : !inStock }" :disabled="!inStock">Add to Cart</button>
        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>
    </div>
</div>`,
    data() {
        return {
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
        }
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
});

var app = new Vue({
    el: '#app',
});