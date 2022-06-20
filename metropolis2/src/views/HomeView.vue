<template>
    <div>
      <tree-nav :favourites="jsonMultilevel"></tree-nav>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TreeNav from '@/components/TreeNav.vue';
import { multilevel } from '../JSONObject';

export default defineComponent({
  name: 'HomeView',
  components: {
    TreeNav,
  },
  data(){
    return {
      jsonMultilevel: multilevel
    }
  }
});
</script>
