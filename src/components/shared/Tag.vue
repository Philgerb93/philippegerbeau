<template>
    <span class="tag">{{name}}</span>
</template>

<script>
    export default {
        props: ['name']
    }
</script>


<style lang="scss">
    .tag {
        border-radius: .5em;
        color: $color-primary-dark;
        border: 1px solid $color-primary-dark;
        display: inline-block;
        font-family: 'PT Sans', sans-serif;
        font-size: 1.3rem;
        margin: .3em .5em;
        padding: .45em 1em;
        position: relative;
        transition: all .15s;
        
        &:hover {
            color: $color-primary-light;
            border-color: $color-primary-light;
        }
    }
</style>
