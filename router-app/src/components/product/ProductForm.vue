<template>
    <form @submit="saveProduct">
        <div class="form-group">
            <input type="text" placeholder="Nombre Producto" class="form-control" v-model="name" />
            <button class="btn btn-primary btn-block">Save</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "ProductForm",
        data(){
            return{
                name: ''
            }
        },
        methods:{
            saveProduct(e){
                e.preventDefault();
                //navegar programanto a los productos
                //this.$router.push('/products')
                this.$router.push({path: '/products'})
            }
        }

    }
</script>