//Add a description to the data object with the value "A pair of warm, fuzzy socks".
//  Then display the description using an expression in an p element, underneath the h1.
Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `<div class="product">
    <div class="product-image">
        <img :src="image" />
    </div>
    <div class="product-info">
        <h1 v-text="title"></h1>
        <p>{{ description }}</p>
        <span v-if="inStock">In Stock</span>
        <span v-else :class="{outOfStock: !inStock}">Out of Stock</span>
        <p>Price is: {{shipping}}</p>
        <p v-text="sale"></p>
        <p>Colors:</p>
        <div v-for="(product, index) in productVariants" class="color-box" :style="{backgroundColor: product.color}"
            :key="product.id" @mouseover="changeSelectedProduct(index)"></div>
        <p>Avalible sizes:</p>
        <ul v-for="size in sizes">
            <li v-text="size"></li>
        </ul>
        <button v-on:click="incrementCart" :class="{ disabledButton : !inStock }" :disabled="!inStock">Add to Cart</button>
        
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
                    id: 2322,
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
        },
        shipping() {
            return this.premium ? 'Free' : '2.99';
        }
    },
    methods: {
        incrementCart() {
            this.$emit('add-to-cart', this.productVariants[this.selectedProduct].id);
        },
        changeSelectedProduct(index) {
            this.selectedProduct = index;
        }
    }
});

Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="name">
    </p>
    
    <p>
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
    </p>
    
    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>
        
    <p>
      <input type="submit" value="Submit">  
    </p>    
  
  </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        addToCart(id) {
            this.cart.push(id);
            console.log(this.cart);
        }
    }
});