<template>
    <div class="project-info">
        <h3>{{project.name}}</h3>
        <p class="project-summary">{{project.summary}}</p>

        <h5>Points clés :</h5>
        <ul class="project-key-points">
            <li v-for="keypoint in project.keypoints"
            v-bind:key="keypoint.id">{{keypoint}}</li>
        </ul>

        <div class="project-tags clearfix">
            <tag v-for="tag in project.tags" v-bind:key="tag.id" v-bind:name="tag"></tag>
        </div>
    </div>
</template>

<script>
    import Tag from './../Tag'

    export default {
        props: ['project'],

        components: {
            Tag
        }
    }
</script>

<style lang="scss">
    .project-info {
        width: 100%;

        @include media-width(1200) {
            float: left;
            opacity: 0;
            width: 46%;
        }

        &.slidedRight {
            animation: slideInRight 1s forwards;
        }
        
        &-summary {
            font-size: 2rem;
            margin-bottom: 2em;
        }
        
        &-list {
            padding-left: 4rem;

            & li {
                margin: .5rem 0;
            }
        }
        
        &-tags {
            margin: 3em 0 0 0;
        
            @include clearfix;
        }
    }
</style>
