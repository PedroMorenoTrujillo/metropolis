<template>
  {{data.type}}
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { MainObject } from '../interfaceModels/mainObject';

export default defineComponent({
  name: 'MainView',
  data(){
    return {
      data: {} as MainObject,
      url: 'http://localhost:3000/mainData',
    }
  },
  computed: {
  },
  methods: {
  },
  created(){
    axios.get(this.url).then((res)=> this.data = res?.data as MainObject)
  },
})
</script>
