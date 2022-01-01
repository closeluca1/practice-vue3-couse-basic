const myApp = {
    el: '#app',
    data() {
        return {
            title: 'Vue3 Course',
            name: 'Patrick',
            lastName: 'Luca',
            products: [
                {
                    title: 'Movie 01',
                    description: 'Good movie',
                    image: './assets/images/movie1.jpg',
                    stars: 3,
                },
                {
                    title: 'Movie 02',
                    description: 'Good movie2',
                    image: './assets/images/movie2.jpeg',
                    stars: 0
                }
            ],
            cart: [],
            // textColor: '#000',
            // bgColor: '#fff'
            styles: {
                color: '#a1a1a1',
                background: '#1a1a1a',
            },
            themeBlack: true
        }
    },
    computed: {
        fullName() {
            return this.name + ' ' + this.lastName;
        }
    },
    methods: {
        addCart(product) {
            this.cart.push(product)
        },
        inCart(product) {
            return this.cart.indexOf(product) != -1;
        },
        removeCart(product) {
            this.cart = this.cart.filter((prod, index) => {
                return product != prod
            })
        },
        toogleTheme() {
            this.themeBlack = !this.themeBlack;

            if (this.themeBlack) {
                this.styles = {
                    color: '#a1a1a1',
                    background: '#1a1a1a',
                }
            } else {
                this.styles = {
                    color: '#1a1a1a',
                    background: '#a1a1a1',
                }
            }
        }
    }
}

const app = Vue.createApp(myApp)


