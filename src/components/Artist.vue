<template>
    <div class="card-columns">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" v-bind:src="artist.image[2]['#text']">
        <div class="card-body">
            <p class="card-text"><a v-bind:href="artist.url" target="_blank">{{artist.name}}</a></p>
        </div>
    </div>
    </div>   
</template>




<script>
export default {
    name : 'artist',
    props : ['artist']
}
</script>

<style lang="scss" scoped>
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>