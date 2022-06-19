<template>
    <div class="popupContainer">
        <div class="profileContainer">
            <div class="profile">
                <div class="profileText">
                    <div class="name">{{ author.fullName }}</div>
                    <div v-for="affliation in author.affiliations" :key="affliation.id">
                        <div class="affliation">{{ affliation.city }}, {{ affliation.country }}</div>
                    </div>
                    <div class="authorMedia">
                        <span><span class="number">{{ author.publications }}</span> <span
                                class="text">Publications</span></span>
                        <span><span class="number">{{ author.views }}</span> <span class="text">Views</span></span>
                        <span><span class="number">{{ author.followers }}</span> <span
                                class="text">Followers</span></span>
                    </div>
                </div>
                <img :src="author.pictureUrl" :alt="author.fullName" @error="setAlternative" class="imageContainer"
                    v-if="!changeImage" />
                <div class="imageContainer alternativeText" v-if="changeImage">{{ alternativeText }}</div>
            </div>
        </div>


        <div class="profileLink">
            <a :href="author.profileUrl" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> View
                Profile</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { stringifyQuery } from 'vue-router';
import { Author } from '../interfaceModels/author';

export default defineComponent({
    name: 'AuthorPopup',
    props: {
        author: { default: () => ({} as Author) }
    },
    data() {
        return {
            alternativeText: '',
            changeImage: false
        }
    },
    methods: {
        setAlternative(e: any) {
            let name = this.author.fullName.split(' ')
            this.alternativeText = name[0][0].toUpperCase() + name[1][0].toUpperCase()
            this.changeImage = !this.changeImage
        }
    }
});
</script>

<style scoped lang="scss">
.popupContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;
    //position: absolute;
    min-width: 385px;
    //bottom: 45px;
    background: #FFFFFF;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.08), 0px 14px 28px rgba(0, 0, 0, 0.1);

    .profileContainer {
        font-family: 'Museo Sans', Helvetica, Arial;
        font-style: normal;
        font-weight: 600;

        .profile {
            display: flex;
            justify-content: space-between;

            .profileText {
                min-height: 97px;

                .name {
                    font-size: 18px;
                    line-height: 25px;
                    color: #020202;
                    min-height: 25px;
                }

                .affliation {
                    font-weight: 300;
                    font-size: 13px;
                    line-height: 20px;
                    color: #555555;
                    min-height: 40px;
                }

                .authorMedia {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    padding: 4px 0px 0px;
                    gap: 16px;
                    min-height: 24px;

                    .number {
                        font-weight: 600;
                        font-size: 13px;
                        line-height: 20px;
                        color: #00A0D2;
                    }

                    .text {
                        font-weight: 300;
                        font-size: 13px;
                        line-height: 20px;
                        color: #020202;
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
                border: 1px solid #E0E0E0;
                border-radius: 100px;

                &.alternativeText {
                    background: rgba(0, 160, 210, 0.05);
                    color: #00A0D2;
                    border: 1px solid #00A0D2;
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
            color: #00A0D2;
        }

    }
}
</style>
