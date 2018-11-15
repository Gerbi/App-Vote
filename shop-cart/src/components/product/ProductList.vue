<template>
    <div>
        <ProductListView v-for="product in productItems" :key="product.id" :product="product"/>
    </div>
</template>

<script>
    import ProductListView from './ProductListItem';
    import {mapGetters} from 'vuex';
    export default {
        name: "ProductList",
        components: {
            ProductListView
        },
        computed:{
            ...mapGetters(['productItems'])
        },
        created(){
            this.$store.dispatch('fetchProducts');
        }
    }
</script>

<style scoped>

</style>
