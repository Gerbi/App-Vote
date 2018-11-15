<template>
    <div>
        <ProductListView/>

    </div>

</template>

<script>
    import ProductListView from "./ProductListView"; './ProductListItem.vue;'
    export default {
        name: "ProductList",
        components: {
            ProductListView
        }
    }
</script>

<style scoped>

</style>
