<template>
  <div class="mainContainer">
    <span class="topTitle">{{ texts.TopTitle }}</span>
    <div class="cardContainer">
      <div class="type">
        {{ data.type }}
      </div>
      <div class="title">
        {{ data.title }}
      </div>
      <div class="authorsContainer">
        {{ texts.Authors }}
        <div class="author" v-for="(author, index) in data.authors" :key="index">
          <span>{{ index === data.authors.length - 1 ? ', and ' : index === 0 ? '' : ', ' }}
            <span class="authorName" @click="showProfile(author, 'author', index + 1)"
              v-click-away="() => cleanProfile()">
              {{ author.fullName }}
            </span><sup>{{ author.affiliations.length }}</sup>
          </span>
          <div class="popupContainer" v-if="popupType === 'author' && index + 1 === popupIndex">
            <person-popup :person="dataForPopup"></person-popup>
          </div>
        </div>
      </div>
      <div class="editor--yourselfContainer">
        <div class="editorContainer">
          {{ texts.Editor }}
          <span class="editor" @click="showProfile(data.editor, 'editor')"
            v-click-away="() => cleanProfile()">{{ data.editor?.fullName }}</span><sup>{{
                data.editor?.affiliations.length
            }}</sup>
          <div class="popupContainer editor" v-if="popupType === 'editor'">
            <person-popup :person="dataForPopup"></person-popup>
          </div>
        </div>
        <div class="yourselfContainer">
          {{ texts.Yourself }}
          <span class="yourself" @click="showProfile(data.yourself, 'yourself')"
            v-click-away="() => cleanProfile()">{{ data.yourself?.fullName
            }}</span><sup>{{ data.yourself?.affiliations.length }}</sup>
          <div class="popupContainer" v-if="popupType === 'yourself'">
            <person-popup :person="dataForPopup"></person-popup>
          </div>
        </div>
      </div>

      <div class="affliationsContainer">
        <span class="affliationsTitle" @click="toogleAffliationsChange">{{ texts.Affliations }} <i
            :class="{ 'fa-solid fa-angle-down': !toggleAffliations, 'fa-solid fa-angle-up': toggleAffliations }"></i></span>
        <div class="affliationsContainerCollapsible" :class="{ 'open': toggleAffliations }">
          <span v-for="(affliation, index) in data.yourself?.affiliations" :key="index">
            <sup class="sup">{{ index + 1 }}</sup> {{ affliation.name }}, {{ affliation.city }}, {{ affliation.country
            }}</span>
        </div>
      </div>
      <div class="journal--sectionContainer">
        {{ data.journal }} | {{ data.section }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Texts } from '../enums';
import { Author, Editor, MainObject, Yourself } from '../interfaceModels';
import { defineComponent } from 'vue';
import PersonPopup from './PersonPopup.vue';

export default defineComponent({
  name: 'MainContainer',
  components: {
    PersonPopup,
  },
  props: {
    data: { default: () => ({} as MainObject) }
  },
  data() {
    return {
      texts: Texts,
      toggleAffliations: false,
      dataForPopup: {} as Author | Editor | Yourself,
      popupType: '',
      popupIndex: 0 as number
    }
  },
  methods: {
    toogleAffliationsChange() {
      this.toggleAffliations = !this.toggleAffliations;
    },
    showProfile(person: Author | Editor | Yourself, type: string, index?: number) {
      this.popupIndex = -1
      if (index) this.popupIndex = index
      this.popupType = type;
      this.dataForPopup = person
    },
    cleanProfile(){
      this.dataForPopup = {} as any; 
      this.popupType = ''
    }
  },

});
</script>


<style scoped lang="scss">
@import '../assets/global.scss';
.mainContainer {
  .topTitle {
    font-family: 'Museo Sans', Helvetica, Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 22px;
    color: $black;
  }

  .cardContainer {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 32px;
    gap: 8px;
    width: 41rem;
    min-height: 18.75rem;
    background: $cardBackground;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    font-family: 'Museo Sans', Helvetica, Arial;
    font-style: normal;
    font-weight: 300;

    .type {
      font-size: .93rem;
      line-height: 1.31rem;
      color: $grey;
    }

    .title {
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: $black;
    }

    .authorsContainer {
      font-weight: 600;
      font-size: 0.93rem;
      line-height: 1.37rem;
      color: $black;

      .author {
        display: inline-block;
        font-weight: 300;
        position: relative;

        .authorName {
          text-decoration: underline;
          cursor: pointer;
        }

        .popupContainer {
          position: absolute;
          z-index: 1;
        }
      }
    }

    .editor--yourselfContainer {
      font-weight: 600;
      font-size: 0.938rem;
      line-height: 22px;
      color: $black;
      position: relative;

      .editor,
      .yourself {
        display: inline-block;
        font-weight: 300;
        text-decoration: underline;
        cursor: pointer;
      }

      .popupContainer {
        position: absolute;
        z-index: 1;
        left: 30%;

        &.editor {
          left: 30%;
          top: 50%
        }
      }

    }

    .affliationsContainer {
      font-weight: 400;
      font-size: 0.813rem;
      line-height: 22px;

      .affliationsTitle {
        color: $blue;
        cursor: pointer;
      }

      .affliationsContainerCollapsible {
        transition: all 0.5s ease;
        display: none;
        cursor: pointer;
        font-weight: 300;
        font-size: 0.93rem;
        line-height: 20px;
        color: $grey;

        &.open {
          display: block;
        }
      }
    }

    .journal--sectionContainer {
      font-weight: 400;
      font-size: 0.93rem;
      line-height: 21px;
      color: $black;
    }
  }
}
</style>
