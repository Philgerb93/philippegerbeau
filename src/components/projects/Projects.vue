<template>
    <div id="projects">
        <h2 id="projects-header">Projets personnels</h2>
        <section v-show="readyProjects === projects.length" id="projects-section" class="project-wrapper">
            <div class="project" v-for="project in projects"
            v-bind:key="project.id">
                <project-info v-bind:project="project"></project-info>
                <project-media v-bind:project="project"
                v-on:MediaReady="readyProjects++"></project-media>

                <div style="clear: both"></div>
            </div>

            <!-- <text-button></text-button> -->
        </section>
        <spinner v-if="readyProjects !== projects.length"></spinner>
    </div>
</template>

<script>
    import ProjectInfo from './ProjectInfo'
    import ProjectMedia from './ProjectMedia'
    import Spinner from '../Spinner'
    // import TextButton from '../shared/TextButton'

    export default {
        data: function() {
            return {
                projects: [],
                readyProjects: 0
            }
        },

        created: function() {
            const db = this.$firebase.firestore();

            db.collection("projects").get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    this.projects.push(doc.data());
                });
                this.projects.sort(this.compare).reverse();
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        mounted() {
            this.projectAnim();
            window.addEventListener('scroll', this.projectAnim);
        },

        destroyed() {
            window.removeEventListener('scroll', this.projectAnim);
        },

        methods: {
            projectAnim: function() {
                var infos = document.querySelectorAll('.project-info');
                var media = document.querySelectorAll('.project-media');
                
                if (window.innerWidth >= 1200) {
                    infos.forEach(element => {
                        if (!element.classList.contains('slidedRight') && this.elemInViewport(element)) {
                            element.classList.add('slidedRight');
                        }
                    });
                    media.forEach(element => {
                        if (!element.classList.contains('slidedLeft') && this.elemInViewport(element)) {
                            element.classList.add('slidedLeft');
                        }
                    });
                }
            },
			elemInViewport(element) {
				var navBarHeight = document.querySelector('.nav').clientHeight;
				var topOfElement = element.getBoundingClientRect().top;
				var bottomOfElement = topOfElement + element.clientHeight;

				return topOfElement + element.clientHeight / 2 > navBarHeight
				&& bottomOfElement - element.clientHeight / 2 < window.innerHeight
            },
            compare(a, b) {
                if (a.priority > b.priority)
                    return 1;
                if (a.priority < b.priority)
                    return -1;
                return 0;
            }
        }, 
        
        components: {
            ProjectInfo,
            ProjectMedia,
            Spinner,
            // TextButton
        }
    }
</script>

<style lang="scss">
    .project-wrapper {
        margin: auto;
        width: 85%;

        @include media-width(1200) {
            max-width: 1500px;
            width: 80%;
        }
    }

    .project {
        @include media-width(1200) {
            margin-bottom: 10rem;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
