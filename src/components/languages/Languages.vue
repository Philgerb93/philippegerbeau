<template>
    <div id="languages">
        <h2 id="language-header">Langages</h2>
        <section id="languages-section" class="languages-wrapper">
            <language-box 
            v-for="language in languages" 
            v-bind:name="language.name" 
            v-bind:progress="language.progress"
            v-bind:key="language.id">
            </language-box>
        </section>
    </div>
</template>

<script>
    import LanguageBox from './LanguageBox'

    export default {
        data: function() {
            return {
                languages: []
            }
        },

        created() {
            const db = this.$firebase.firestore();
            var $this = this;

            db.collection("languages").get()
            .then(function (snapshot) {
                snapshot.forEach(function(doc) {
                    $this.languages.push(doc.data());
                });
                $this.languages.sort($this.compare).reverse();
                $this.$emit('DBReady');
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
            LanguageBox
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
