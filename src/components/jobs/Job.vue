<template>
	<div class="job">
        <div class="job-first-row">
            <div class="job-img">
                <img v-bind:src="logoPath" v-bind:alt="'Logo de ' + job.name">            
            </div>
            <div class="job-info">
                <h4>{{job.name}}</h4>
                <p class="job-info-title">{{job.title}}</p>
                <p class="job-info-duration">{{formattedStartDate}} - {{formattedEndDate}}</p>
            </div>
        </div>

        <div class="job-tags">
            <tag v-for="tag in job.tags" v-bind:key="tag.id" v-bind:name="tag"></tag>
        </div>

        <!-- <div class="job-timeline"></div>
        <div v-if="firstOfYear" class="job-timeline-circle"></div>
        <div v-if="firstOfYear" class="job-timeline-label">2018</div> -->
	</div>
</template>

<script>
    import Tag from '../shared/Tag'

	export default {
        props: ['job'],

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
            var imgRef = storage.child('logos').child(this.job.logo);
            
            imgRef.getDownloadURL()
            .then(url => {
                this.logoPath = url;
                this.$emit('JobReady')
            })
            .catch(function(error) {
                console.log(error);
            });
        },

        computed: {
            formattedStartDate() {
                var date = new Date(0);
                date.setSeconds(this.job.startDate.seconds);
                return this.monthNames[date.getMonth()] + ' ' + date.getFullYear().toString();
            },
            formattedEndDate() {
                var now = new Date();
                var date = this.job.endDate ? new Date(0) : null;
                
                if (this.job.endDate) {
                    date.setSeconds(this.job.endDate.seconds);
                }

                if (date && date <= now) {
                    return this.monthNames[date.getMonth()] + ' ' + date.getFullYear().toString();
                } else {
                    return 'Présent';
                }
            },
            formattedTimelineDate() {
                var date = new Date(0);
                date.setSeconds(this.job.startDate.seconds);
                return date.getFullYear().toString();
            }
        },

        components: {
            Tag
        }
	}
</script>

<style lang="scss">
	.job {
		background-color: $color-text-white;
		border: 1px solid $color-grey-light;
		box-shadow: 0 5px 10px rgba(0,0,0,.03);
		margin: 2% auto;
		transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;
        width: 95%;

        @include media-width(500) {
            width: 60%;
            max-width: 500px;
            min-width: 450px;
        }

		&:hover {
			transform: translateY(-6px);
			box-shadow: 0 10px 20px rgba(0,0,0,.03);
		}

        &-first-row {
            display: flex;
        }
        
        &-img {
            width: 150px;
            height: 131px;
            background-color: $color-primary;
            clip-path: polygon(0 0, 19% 0, 26% 7%, 81% 7%, 81% 80%, 96% 100%, 0 100%);

            & img {
                width: 110px;
                height: 110px;
                background-color: #FFF;
                padding: 12%;
                margin: 7%;
                z-index: 1;
                border: 2px solid $color-primary;
            }
        }

        &-info {
            position: relative;
            padding-left: 2rem;
            flex: 1;

            &-title {
                font-size: 1.6rem;
                letter-spacing: .05em;
            }

            &-duration {
                margin: .2em .4em;
                color: $color-text-hint;
                font-size: 1.4rem;
                word-spacing: .2em;
                letter-spacing: .05em;
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }

        &-tags {
            grid-column: 1/3;
            border-top: 1px solid $color-grey-light;
            padding: .5rem 0;
        }


        &-timeline {
            position:absolute;
            top: -10px;
            left: -100px;
            background-color: $color-grey-dark;
            width: 4px;
            height: 156px;
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
