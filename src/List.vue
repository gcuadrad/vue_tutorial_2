<template lang="html">
  <div>
    <h2>This is the {{text}} page</h2>
    <ul v-if="object_list != null">
      <li v-for="object in object_list">{{object.nombre}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'List',
  mounted(){
    this.getList()
  },
  data() {
    return {
      text: 'List',
      object_list: null
    }
  },
  methods: {
    getList(){
      axios.get('http://localhost/api-rest/restaurantes-api.php/restaurantes')
      .then((response) => {
        this.object_list = response.data.data
      })
    }
  }
}
</script>

<style lang="css">
</style>
