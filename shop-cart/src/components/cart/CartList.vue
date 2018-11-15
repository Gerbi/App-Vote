<template>
<div>
    <div class="card" style="border: none;">
        <h3 align="center">Product Cart</h3>
        <table class="table">
            <thead class="thead-light">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
            </tr>
            </thead>
            <tbody>
            <CartItem v-for="item in cartItems" :key="item.id" :cartItem="item"/>
            </tbody>
        </table>
        <hr/>
        <button class="btn btn-success btn-lg">
            Checkout
            <span>($)</span>
        </button>
    </div>

</div>
</template>

<script>
    import CartItem from './CartItem.vue';
    import {mapGetters} from 'vuex';
    export default {
        name: "CartList",
        components:{
            CartItem
        },
        computed:{
            ...mapGetters(['cartItems'])
        },
        created(){
            this.$store.dispatch('fetchCartItems');
        }
    }
</script>

<style scoped>

</style>
