<template>
    <div class="project-info">
        <h3>{{project.name}}</h3>
        <p class="project-info-summary">{{project.summary}}</p>

        <h5>Points clés :</h5>
        <ul class="project-info-keypoints">
            <li v-for="keypoint in project.keypoints"
            v-bind:key="keypoint.id">{{keypoint}}</li>
        </ul>

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

        &.slidedRight {
            animation: slideInRight 1s forwards;
        }
        
        &-summary {
            font-size: 1.6rem;
            line-height: 1.4em;
            margin-bottom: 1.6em;
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
