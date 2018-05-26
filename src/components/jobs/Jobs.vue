<template>
    <div id="jobs">
        <h2 id="jobs-header">Expérience</h2>
        <section id="jobs-section" class="jobs-wrapper">
            <job
            v-for="job in jobs" 
            v-bind:job="job"
            v-bind:key="job.id"
            v-on:JobReady="loadingJobs()">
            </job>
        </section>
    </div>
</template>

<script>
    import Job from './Job'

    export default {
        data: function() {
            return {
                jobs: [],
                readyJobs: 0,
                timelineYears: []
            }
        },

        created() {
            const db = this.$firebase.firestore();
            var $this = this;

            db.collection("jobs").get()
            .then(function (snapshot) {
                snapshot.forEach(function(doc) {
                    $this.jobs.push(doc.data());
                });
                
                $this.jobs.sort($this.compare);

                for (var job of $this.jobs) {
                    const date = new Date(0);
                    date.setSeconds(job.startDate.seconds); 
                    let startYear = (date.getFullYear());

                    if ($this.timelineYears.indexOf(startYear) > -1) {
                        job.firstOfYear = false;
                    } else {
                        job.firstOfYear = true;
                        $this.timelineYears.push(startYear);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        methods: {
            compare: function(a, b) {
                if (a.startDate > b.startDate)
                    return 1;
                if (a.startDate < b.startDate)
                    return -1;
                return 0;
            },
            loadingJobs() {
                this.readyJobs++;

                if (this.readyJobs == this.jobs.length) {
                    this.$emit('DBReady');
                }
            },
        },
        
        components: {
            Job
        }
    }
</script>

<style lang="scss">
    .jobs-wrapper {
        @include clearfix;
    }
</style>
