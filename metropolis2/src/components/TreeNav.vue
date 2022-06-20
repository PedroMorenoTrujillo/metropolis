<template>
  <div class="container">
    <div @click="collapsed = !collapsed" :style="{ 'margin-left': `${depth * 20}px` }" class="favourites">
      <span>{{ favourites.name }}</span>
      <span v-if="hasNextElement && !collapsed">
        <i class="fa-solid fa-sort-down"></i>
      </span>
      <span v-else-if="hasNextElement && collapsed">
        <i class="fa-solid fa-sort-up"></i>
      </span>
      
    </div>
    <template v-if="collapsed">
      <tree-nav v-for="item in favourites.favourites" :key="item.name" :favourites="item" :depth="depth + 1"></tree-nav>
    </template>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Multilevel } from '../JSONObject';

export default defineComponent({
  name: 'TreeNav',
  props: {
    favourites: { default: () => ({} as Multilevel) },
    depth: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    collapse() {
      this.collapsed = !this.collapsed
    }
  },
  computed:{
    hasNextElement(){
      return this.favourites.favourites
    }
  }
});
</script>

<style scoped lang="scss">
.container {
  margin-left: 25px;
}

.favourites {
  text-align: left;
  line-height: 25px;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
}
</style>