<template>
    <div id="projects">
        <h2 id="project-header">Projets personnels</h2>
        <section id="projects-section" class="project-wrapper">
            <div class="project" v-for="(project, index) in projects"
            v-bind:key="project.id">
                <hr v-if="index !== 0">		

                <project-info v-bind:project="project"></project-info>
                <project-media v-bind:project="project" v-bind:pos="index"
                v-on:MediaReady="loadingProjects()"></project-media>

                <div style="clear: both"></div>
            </div>
        </section>
    </div>
</template>

<script>
    import ProjectInfo from './ProjectInfo'
    import ProjectMedia from './ProjectMedia'

    export default {
        data: function() {
            return {
                projects: [],
                readyProjects: 0
            }
        },

        created: function() {
            const db = this.$firebase.firestore();
            var $this = this;

            db.collection("projects").get()
            .then(function (snapshot) {
                snapshot.forEach(function(doc) {
                    $this.projects.push(doc.data());
                });
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
                const $this = this;
                
                if (window.innerWidth >= 1200) {
                    infos.forEach(function(element) {
                        if (!element.classList.contains('slidedRight') && $this.elemInViewport(element)) {
                            element.classList.add('slidedRight');
                        }
                    });
                    media.forEach(function(element) {
                        if (!element.classList.contains('slidedLeft') && $this.elemInViewport(element)) {
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
            loadingProjects() {
                this.readyProjects++;

                if (this.readyProjects == this.projects.length) {
                    this.$emit('DBReady');
                }
            }
        }, 
        
        components: {
            ProjectInfo,
            ProjectMedia
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
</style>
