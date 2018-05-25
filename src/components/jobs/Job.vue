<template>
	<div class="job">
        <div class="job-bg"></div>
        <img class="job-img" v-bind:src="logoPath" v-bind:alt="'Logo de ' + name"></img>
        <div class="job-info">
            <h4>{{name}}</h4>
            <p>{{title}}</p>
        </div>

        <p class="job-duration">{{formattedStartDate}} - {{formattedEndDate}}</p>

        <!-- <div class="job-timeline"></div>
        <div v-if="firstOfYear" class="job-timeline-circle"></div>
        <div v-if="firstOfYear" class="job-timeline-label">2018</div> -->
	</div>
</template>

<script>
	export default {
        props: ['name', 'title', 'startDate', 'endDate', 'logo'],

        data() {
            return {
                monthNames: [
                    "Janvier", "Février", "Mars",
                    "Avril", "Mai", "Juin", "Juillet",
                    "Août", "Septembre", "Octobre",
                    "Novembre", "Décembre"
                ],
                logoPath: ""
            }
        },

        mounted() {
            const storage = this.$firebase.storage().ref();
            var imgRef = storage.child('logos').child(this.logo);
            const $this = this;
            
            imgRef.getDownloadURL()
            .then(function(url) {
                $this.logoPath = url;
                $this.$emit('JobReady')
            })
            .catch(function(error) {
                console.log(error);
            });
        },

        computed: {
            formattedStartDate() {
                var date = new Date(0);
                date.setSeconds(this.startDate.seconds);
                return this.monthNames[date.getMonth()] + ' ' + date.getFullYear().toString();
            },
            formattedEndDate() {
                var date = this.endDate ? new Date(0).setSeconds(this.endDate.seconds) : null;
                var now = new Date();

                if (date && date >= now) {
                    return this.monthNames[date.getMonth()] + ' ' + date.getFullYear().toString();
                } else {
                    return 'Présent';
                }
            },
            formattedTimelineDate() {
                var date = new Date(0);
                date.setSeconds(this.startDate.seconds);
                return date.getFullYear().toString();
            }
        }
	}
</script>

<style lang="scss">
	.job {
		background-color: $color-text-white;
		border: 1px solid $color-grey-light;
		box-shadow: 0 5px 10px rgba(0,0,0,.03);
		margin: 2% auto;
        min-width: 450px;
        max-width: 500px;
		transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;
        width: 60%;
        height: 130px;
        position: relative;

		&:hover {
			transform: translateY(-6px);
			box-shadow: 0 10px 20px rgba(0,0,0,.03);
		}
        
        &-bg {
            background-color: $color-primary;
            width: 30%;
            height: 100%;
            float: left;
            clip-path: polygon(0 0, 20% 0, 90% 100%, 0 100%);
        }

        &-img {
            width: 110px;
            height: 110px;
            background-color: #FFF;
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 1;
            border: 2px solid $color-primary;
            padding: 16px;
        }

        &-duration {
            position: absolute;
            right: 0;
            bottom: 0;
            margin: .2em .4em;
            color: $color-text-hint;
            font-size: 1.6rem;
            word-spacing: .2em;
            letter-spacing: .05em;
        }

        &-title {
            font-size: 1.8rem;
            letter-spacing: .2em;
        }

        &-timeline {
            position:absolute;
            top: 0;
            left: -100px;
            background-color: $color-grey-dark;
            width: 4px;
            height: 147px;
        }

        &-timeline-circle {
            position: absolute;
            top: 55px;
            left: -108px;
            background-color: $color-grey-dark;
            width: 20px;
            height: 20px;
            border-radius: 1em;
        }

        &-timeline-label {
            position: absolute;
            top: 55px;
            left: -80px;
            color: $color-grey-dark;
        }
	}
</style>
