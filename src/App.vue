<template>
  <div id="app">
    <img src="dist/logo.png" style="width: 10%">
    <h1>PlatziMusic</h1>
    <div class="row">
      <countries :countries="countries" v-on:selectcountry="_handlerCountry" ></countries>
    </div>
    <spinner v-show="loading" ></spinner>
    <br>
    <div class="row">
      <ul>
        <artist v-for="artist in artists" :artist="artist" :key="artist.mbid"></artist>
      </ul>  
    </div>
  </div>
</template>
<script>
import Artist from './components/Artist.vue'
import getArtist from './api'
import Spinner from './components/Spinner.vue'
import Countries from './components/Countries.vue'

export default {
  name: 'app',
  data () {
    return {
      artists : [],
      countries : [
        { name: 'Argentina', value:'argentina' },
        { name: 'Colombia', value:'colombia' },
        { name: 'España', value:'spain' }
      ],
      selectedCountry : 'argentina',
      loading : true
    }
  }, 
  components :{
    Artist, Spinner, Countries
  },
  methods:{
    refreshArtists(){
      const self = this;
      this.loading = true;
      this.artists = [];
      getArtist(this.selectedCountry)
        .then(function (artists) {
          self.artists = artists
          self.loading = false
        })
    }, 
    _handlerCountry : function(country){
      this.selectedCountry = country;
    }
  },
  mounted(){
    this.refreshArtists();
  }, 
  watch : {
   selectedCountry(){
    this.refreshArtists();
   }
  }
}
</script>

<style>
  body {
    background-color: #FFF;
    color: #000;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;    
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>