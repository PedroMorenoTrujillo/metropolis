<template>
<div>
  {{texts.TopTitle}}
<div>
    <div>
        {{data.type}}
    </div>
    <div>
        {{data.title}}
    </div>
    <div>
      {{texts.Authors}}
      <span v-for="author in data.authors">{{author.fullName}}</span>
    </div>
    <div>
      {{texts.Editor}}
      <span>{{data.editor?.fullName}}</span>
    </div>
    <div>
      {{texts.Yourself}}
      <span>{{data.yourself?.fullName}}</span>
    </div>
    <div>
        {{texts.Affliations}}
        <div>
          <span v-for="affliation in data.yourself?.affiliations">
          {{affliation.name}}, {{affliation.city}}, {{affliation.country}}</span>
        </div>
    </div>
    <div>
        {{data.journal}} | {{data.section}}
    </div>
  </div>
</div>

</template>

<script lang="ts">
import { Texts } from '@/enums';
import axios from 'axios';
import { defineComponent } from 'vue';
import { MainObject } from '../interfaceModels/mainObject';

export default defineComponent({
  name: 'MainView',
  data(){
    return {
      data: {} as MainObject,
      url: 'http://localhost:3000/mainData',
      texts: Texts,
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
