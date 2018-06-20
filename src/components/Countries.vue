<template>
    <select class="col-sm-2 form-control"  v-on:change="onchange" style="margin: 0 auto; float: none;">
      <option  v-for="country in countries" :value="country.value"  
      v-bind:key="country.value">{{country.name}}</option>
    </select>
</template>

<script>
export default {
    name : 'countries', 
    props : ['countries'], 
    methods : {
        onchange : function(ev){
            // selectcountry is the name of event
            this.$emit('selectcountry', ev.target.value)
        }
    } 
}
</script>

<style lang="scss" scoped>
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>


