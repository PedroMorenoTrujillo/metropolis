<template> 
  <MainContainer :data="data" class="mainView" v-if="data"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Texts } from '@/enums';
import { MainObject } from '../interfaceModels/mainObject';
import axios from 'axios';
import MainContainer from '@/components/MainContainer.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MainContainer
  },
  data(){
    return {
      data: {} as MainObject,
      url: 'http://localhost:3000/mainData',
      texts: Texts,
    }
  },
  async created(){
    await axios.get(this.url).then((res)=> this.data = res?.data as MainObject)
  },
});
</script>

<style scoped lang="scss">
.mainView{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 1.5rem;
  min-width: 41rem;
  min-height: 27rem;
}
</style>
