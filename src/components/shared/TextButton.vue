<template>
    <a class="txt-btn" href="#">Afficher plus</a>
</template>

<script>
    export default {
        props: ['']
    }
</script>

<style lang="scss">
    .txt-btn {
        color: $color-primary;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid $color-primary;
        padding:1.2rem 4rem;
        transition: all .2s;
        align-self: center;

        &:hover {
            background-color: $color-primary;
            color: #FFF;
            box-shadow: 0 1rem 2rem rgba(0,0,0,.15);
            transform: translateY(-2px);
        }

        &:active {
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
            transform: translateY(0);
        }
    }
</style>

