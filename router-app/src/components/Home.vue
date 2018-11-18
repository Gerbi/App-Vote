<template>
    <h2>Home</h2>
</template>

<script>
    export default {
        name: "Home",
        created(){
            console.log(this.$route.currentRoute)
        }
    }
</script>

<style scoped>

</style>