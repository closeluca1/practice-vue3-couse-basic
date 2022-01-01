const productDetail = {
    template: `
        <p>{{ product.title }}</p>
        <img :src="product.image" :alt="product.title" style="width: 120px;">
        <strong v-if="product.stars > 0">stars: {{ product.stars }}</strong>

        <button type="button" @click.prevent="addCart(product)" :disabled="productInCart">ADD CART</button>
    `,
    emits: ['add-prod-cart'],
    // props: ['product', 'productInCart'],
    props: {
        product: {
            type: Object,
            required: true,
        },
        productInCart: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            example: 123,
        }
    },
    methods: {
        addCart (product) {
            console.log('funciona')
            this.$emit('add-prod-cart', product)
        }
    }
}

app.component('product-detail', productDetail)
