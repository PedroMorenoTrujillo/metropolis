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
              v-click-away="() => { dataForPopup = {} as any; popupType = '' }">
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
            v-click-away="() => { dataForPopup = {} as any; popupType = '' }">{{ data.editor?.fullName }}</span><sup>{{
                data.editor?.affiliations.length
            }}</sup>
          <div class="popupContainer editor" v-if="popupType === 'editor'">
            <person-popup :person="dataForPopup"></person-popup>
          </div>
        </div>
        <div class="yourselfContainer">
          {{ texts.Yourself }}
          <span class="yourself" @click="showProfile(data.yourself, 'yourself')"
            v-click-away="() => { dataForPopup = {} as any; popupType = '' }">{{ data.yourself?.fullName
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
      person.show = !person.show;
      this.dataForPopup = person
    },
  },

});
</script>


<style scoped lang="scss">
.mainContainer {
  width: 593px;
  height: 22px;

  .topTitle {
    font-family: 'Museo Sans', Helvetica, Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 22px;
    color: #020202;
  }

  .cardContainer {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 32px;
    gap: 8px;
    width: 659px;
    min-height: 299px;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    font-family: 'Museo Sans', Helvetica, Arial;
    font-style: normal;
    font-weight: 300;

    .type {
      font-size: 15px;
      line-height: 21px;
      color: #555555;
    }

    .title {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      color: #020202;
    }

    .authorsContainer {
      font-weight: 600;
      font-size: 15px;
      line-height: 22px;
      color: #020202;

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
      font-size: 15px;
      line-height: 22px;
      color: #020202;
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
      font-size: 13px;
      line-height: 22px;

      .affliationsTitle {
        color: #0084AD;
        cursor: pointer;
      }

      .affliationsContainerCollapsible {
        transition: all 0.5s ease;
        display: none;
        cursor: pointer;
        font-weight: 300;
        font-size: 15px;
        line-height: 20px;
        color: #555555;

        &.open {
          display: block;
        }

        .sup {
          //color: #020202;
        }
      }
    }

    .journal--sectionContainer {
      font-weight: 400;
      font-size: 15px;
      line-height: 21px;
      color: #020202;
    }
  }
}
</style>
