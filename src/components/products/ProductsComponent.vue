<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'Lista de Produtos'
        }
    },
    created () {
        this.getProducts()
    },
    methods: {
        getProducts () {
            this.$http.get('http://www.geonames.org/childrenJSON?geonameId=3469034')
                .then(response => {
                    console.log(response)
                }, error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>

</style>