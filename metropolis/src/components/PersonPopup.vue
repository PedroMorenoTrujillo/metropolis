<template>
    <div class="popupContainer">
        <div class="profileContainer">
            <div class="profile">
                <div class="profileText">
                    <div class="name">{{ person.fullName }}</div>
                    <div v-for="affliation in person.affiliations" :key="affliation.id">
                        <div class="affliation">{{ affliation.city }}, {{ affliation.country }}</div>
                    </div>
                    <div class="authorMedia">
                        <span><span class="number">{{ person.publications }}</span> <span
                                class="text">Publications</span></span>
                        <span><span class="number">{{ person.views }}</span> <span class="text">Views</span></span>
                        <span><span class="number">{{ person.followers }}</span> <span
                                class="text">Followers</span></span>
                    </div>
                </div>
                <img :src="person.pictureUrl" :alt="person.fullName" @error="setAlternative" class="imageContainer"
                    v-if="!changeImage" />
                <div class="imageContainer alternativeText" v-if="changeImage">{{ alternativeText }}</div>
            </div>
        </div>


        <div class="profileLink">
            <a :href="person.profileUrl" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> View
                Profile</a>
        </div>
    </div>
</template>

<script lang="ts">
import { Editor, Yourself } from '@/interfaceModels';
import { defineComponent } from 'vue';
import { Author } from '../interfaceModels/author';

export default defineComponent({
    name: 'AuthorPopup',
    props: {
        person: { default: () => ({} as Author | Editor | Yourself) }
    },
    data() {
        return {
            alternativeText: '',
            changeImage: false
        }
    },
    methods: {
        setAlternative(e: any) {
            let name = this.person.fullName.split(' ')
            this.alternativeText = name[0][0].toUpperCase() + name[1][0].toUpperCase()
            this.changeImage = !this.changeImage
        }
    }
});
</script>

<style scoped lang="scss">
@import '../assets/global.scss';
.popupContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;
    min-width: 24rem;
    background: $cardBackground;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.08), 0px 14px 28px rgba(0, 0, 0, 0.1);

    .profileContainer {
        font-family: 'Museo Sans', Helvetica, Arial;
        font-style: normal;
        font-weight: 600;

        .profile {
            display: flex;
            justify-content: space-between;

            .profileText {
                min-height: 6.6rem;

                .name {
                    font-size: 1.125rem;
                    line-height: 25px;
                    color: $black;
                    min-height: 1.563rem;
                }

                .affliation {
                    font-weight: 300;
                    font-size: 0.813rem;
                    line-height: 20px;
                    color: $grey;
                    min-height: 30px;
                }

                .authorMedia {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    padding: 4px 0px 0px;
                    gap: 16px;
                    min-height: 1.5rem;

                    .number {
                        font-weight: 600;
                        font-size: 0.813rem;
                        line-height: 20px;
                        color: $blue;
                    }

                    .text {
                        font-weight: 300;
                        font-size: 13px;
                        line-height: 20px;
                        color: $black;
                    }
                }
            }

            .imageContainer {
                width: 56px;
                height: 56px;
                position: absolute;
                right: 4%;
                top: 9%;
                bottom: 0%;
                border: 1px solid $borderLight;
                border-radius: 6.25rem;

                &.alternativeText {
                    background: rgba(0, 160, 210, 0.05);
                    color: $blue;
                    border: 1px solid $borderBlue;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

    .profileLink {
        display: flex;
        justify-content: end;
        width: 100%;
        font-weight: 400;
        font-size: 11px;
        line-height: 17px;
        display: flex;
        align-items: center;
        text-transform: uppercase;

        a {
            color: $borderBlue;
        }

    }
}
</style>
