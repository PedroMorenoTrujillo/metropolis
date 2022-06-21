<template>
  <div class="container">
    <div @click="collapsed = !collapsed" :style="{ 'margin-left': `${depth * 20}px` }" class="favourites">
      <div class="wrapper">
        <span class="name">{{ favourites.name }}</span>
        <span v-if="hasNextElement && !collapsed" class="icon">
          <i class="fa-solid fa-sort-down"></i>
        </span>
        <span v-else-if="hasNextElement && collapsed" class="icon">
          <i class="fa-solid fa-sort-up"></i>
        </span>
      </div>


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
  computed: {
    hasNextElement() {
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

  cursor: pointer;
  display: flex;
  align-items: center;

  .wrapper {
    background: black;
    color: white;
    box-sizing: border-box;
    width: auto;
    border-radius: 13px;
    padding: 5px 10px 5px 8px;
    margin-top: 5px;

    .name {
      font-weight: 500;
    }

    .icon {
      font-weight: normal;
      margin-left: 5px;
    }
  }


}
</style>