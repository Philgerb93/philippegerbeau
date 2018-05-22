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
        background-color: $color-primary;
        border-bottom-right-radius: .4em;
        border-top-right-radius: .4em;
        color: $color-text-white;
        display: inline-block;
        font-family: 'PT Sans', sans-serif;
        font-size: 1.3rem;
        margin: 1em;
        padding: .45em 1em .45em 1em;
        position: relative;
        transition: background-color .3s;
        
        &:before {
            border-color: transparent $color-primary transparent transparent;
            border-style: solid;
            border-width: 1.42rem 1.42rem 1.42rem 0;	
            content: "";
            float: left;
            height: 0;
            left: -1.42rem;
            position: absolute;
            top: 0;
            transition: border-color .3s;
            width: 0;
        }
        
        &:after{
            content: "";
            position: absolute;
            top: 1.2rem;
            left: 0;
            float: left;
            width: .6rem;
            height: .6rem;
            border-radius: .2rem;
            background: $color-background;
        }
        
        &:hover {
            background-color: $color-primary-light;

            &:before {
                border-color: transparent $color-primary-light transparent transparent;
            }
        }
    }
</style>
