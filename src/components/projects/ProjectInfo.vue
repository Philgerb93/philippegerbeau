<template>
    <div class="project-info">
        <h3>{{project.name}}<a v-if="project.githubRepo"  :href="'https://github.com/philgerb93/' + project.githubRepo" class="github-icon"><fa-icon :icon="['fab', 'git-alt']"/></a></h3>

        <div class="project-info-summary">
            <p>{{project.summary}}</p>
            <div v-if="project.solo">
                <fa-icon class="type-icon" :icon="['fas', 'user']"/>
                <p>Seul</p>
            </div>
            <div v-else>
                <fa-icon class="type-icon" :icon="['fas', 'users']"/>
                <p>Équipe</p>
            </div>
        </div>

        <h5>Points clés :</h5>
        <ul class="project-info-keypoints">
            <li v-for="keypoint in project.keypoints"
            v-bind:key="keypoint.id">{{keypoint}}</li>
        </ul>

        <div class="project-info-tags">
        </div>
        <div class="project-info-tags">
            <tag v-for="tag in project.tags" v-bind:key="tag.id" v-bind:name="tag"></tag>
        </div>
    </div>
</template>

<script>
    import Tag from './../shared/Tag'

    export default {
        props: ['project'],

        components: {
            Tag
        },

        computed: {
            getRepoUrl() {
                return "https://github.com/philgerb93/" + this.project.repoUrl;
            }
        }
    }
</script>

<style lang="scss">
    .project-info {
        flex: 1;

        @include media-width(1200) {
            opacity: 0;
            flex-basis: 46%;
        }

        & a.github-icon {
            color: $color-text-black;
            margin-left: 8px;
            padding-top: 2px;
            cursor: pointer;
            vertical-align: middle;

            &:hover {
                color: $color-primary-light;
            }
        }

        &.slidedRight {
            animation: slideInRight 1s forwards;
        }
        
        &-summary {
            font-size: 1.6rem;
            line-height: 1.4em;
            margin-bottom: 1.6em;
            display: flex;
            justify-content: space-between;
            align-items: center;

            & div {
                font-size: 12px;
                color: $color-primary-dark;
                width: 100px;
                height: 32px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid $color-primary-dark;
                padding: 8px;
                margin-left: 32px;
                border-radius: .5em;

                & .type-icon {
                    color: $color-primary-light;
                    margin-right: 8px;
                }
            }
        }
        
        &-keypoints {
            margin-left: 2em;

            & li {
                margin: .5rem 0;
            }
        }
        
        &-tags {
            margin: 1.4em 0 0 0;
        
            @include clearfix;
        }
    }
</style>
