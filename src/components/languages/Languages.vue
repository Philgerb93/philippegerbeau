<template>
    <div id="languages">
        <h2 id="languages-header">Langages</h2>
        <section v-if="DBLoaded" id="languages-section" class="languages-wrapper">
            <language-box 
            v-for="language in languages" 
            v-bind:name="language.name" 
            v-bind:progress="language.progress"
            v-bind:key="language.id">
            </language-box>
        </section>
        <spinner v-else></spinner>
    </div>
</template>

<script>
    import LanguageBox from './LanguageBox'
    import Spinner from '../Spinner'

    export default {
        data: function() {
            return {
                languages: [],
                DBLoaded: false
            }
        },

        created() {
            const db = this.$firebase.firestore();

            db.collection("languages").get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    this.languages.push(doc.data());
                });
                this.languages.sort(this.compare).reverse();
                this.DBLoaded = true;
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        methods: {
            compare: function(a, b) {
                if (a.progress > b.progress)
                    return 1;
                if (a.progress < b.progress)
                    return -1;
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            }
        },
        
        components: {
            LanguageBox,
            Spinner
        }
    }
</script>

<style lang="scss">
    .languages-wrapper {
        margin: auto;
        max-width: 460px;
        width: 95%;

        @include clearfix;

        @include media-width(560) {
            max-width: 800px;
        }

        @include media-width(1200) {
            max-width: 1500px;
            width: 80%;
        }
    }
</style>
