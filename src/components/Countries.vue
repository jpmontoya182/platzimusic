<template>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <select class="form-control"  v-on:change="onchange" style="margin: 0 auto; float: none;">
        <option  v-for="country in countries" :value="country.value"  
        v-bind:key="country.value">{{country.name}}</option>
        </select>
    </div>
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

<style>

</style>


