<template>
    <div v-if="project.video || project.images" class="project-media">
        <div class="thumbnail" v-if="project.video" v-on:click="vidClick()">
            <img v-bind:src="thumbnail" class="thumbnail-img"
            v-bind:alt="'Vignette pour la vidéo de ' + project.name">
            <img class="thumbnail-play-icon" src="../../assets/play_btn.png" alt="Icône de lecture">
        </div>

        <div class="project-media-imgs" v-else>
            <img v-for="(image, i) in images"
            v-bind:key="image.id"
            v-bind:src="image"
            v-bind:alt="'Image du projet ' + project.name"
            v-on:click="imgClick(i)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['project'],

        data: function() {
            return {
                thumbnail: "",
                video: "",
                images: []
            }
        },

        mounted() {
            const storage = this.$firebase.storage().ref();
            var imgRef;
            const $this = this;
            const promises = []

            if (this.project.video) {
                imgRef = storage.child(this.project.thumbnail);
                var vidRef = storage.child(this.project.video);

                promises.push(imgRef.getDownloadURL()
                .then(function(url) {
                    $this.thumbnail = url;
                })
                .catch(function(error) {
                    console.log(error);
                }));

                promises.push(vidRef.getDownloadURL()
                .then(function(url) {
                    $this.video = url;
                }));

            } else if (this.project.images) {
                for (const image of this.project.images) {
                    imgRef = storage.child(image);

                    promises.push(imgRef.getDownloadURL()
                    .then(function(url) {
                       $this.images.push(url);
                    })
                    .catch(function(error) {
                        console.log(error);
                    }));
                }
            }

            Promise.all(promises).then(() => {    
                window.setTimeout(function() {
                    $this.$emit('MediaReady')
                }, 200);
            });
        },

        methods: {
            imgClick(index) {
                this.$parent.$emit('OpenImgModal', this.images, index)
            },
            vidClick() {
                this.$parent.$emit('OpenVidModal', this.video);
            }
        }
    }
</script>

<style lang="scss">
    .project-media {
        position: relative;
        transition: height .3s ease-out;
        flex: 1;
        margin: 3rem auto 6rem;
        
        @include media-width(1200) {
            opacity: 0;
            flex-basis: 48%;
            margin: 0;
        }

        &.slidedLeft {
            animation: slideInLeft 1s forwards;
        }

        & img {
            cursor: pointer;
            transition: opacity .3s ease-in-out;

            &:hover {
                opacity: .7;
            }
        }

        &-imgs {
            margin: 0 auto;
            width: 90%;

            @include media-width(1200) {
                left: 100%;
                position: absolute;
                top: 50%;
                transform: perspective(1px) translateX(-100%) translateY(-50%);
            }
        
            @include clearfix;

            & img {
                background-color: $color-text-white;
                box-shadow: 0 10px 20px rgba(0,0,0,.1);
                display: block;
                float: left;
                margin: 1% 1%;
                max-width: 23%;
                max-height: 260px;
            }
        }
    }

    .thumbnail {
        margin: auto;
        max-width: 420px;
        position: relative;
        width: 100%;
    
        @include media-width(1200) {
            left: 100%;
            position: absolute;
            top: 50%;
            transform: perspective(1px) translateX(-100%) translateY(-50%);
            width: 80%;
        }
        
        &-img {
            box-shadow: 0 20px 100px rgba(0,0,0,.1);
            max-height: 180px;
            object-fit: cover;
            padding: 2%;
            width: 100%;

            @include media-width(1200) {
                max-height: 260px;
            }
        }

        &-play-icon {
            z-index: 2;
            height: 20%;
            position: absolute;
            pointer-events: none;
    
            @include absCenter;
        }
    }
</style>
