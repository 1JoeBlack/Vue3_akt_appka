<template>
    <div >
    </div>
</template>

<script>
    //import axios library for working with API and promises 
    import axios from "axios"
    export default {
        data() {
            return {
                //empty array where all information will be stored from API
                topics: []
            }
        },

        methods: {
            getData() {
            axios
             .get('https://public-api.aktuality.sk/articles/mostread/aktuality/')
             .then(response => {
                // handle success - data filtred by method extractData are stored into array topics 
                this.topics = []
                response.data.items.forEach(topic => {
                    this.topics.push(this.extractData(topic))
                });
            })
                //for each topic in "topics" count number of days from when the topic has been published - expand the array "topics" with days {days: number of days} where is this information stored. Expand our array with viewsOneDay, where is the information about views per day for each topic - views/number of days from publication of topic. Also viewsThreeDays where are data about views for 3 days views. Logic is following if number of days from when the topic was published is higher than 3 days then divide views / days and multiply by 3, otherwise use the number of views itself. For seven days views will be used unchanged. 
                //
             .then( () => {
                    this.topics.forEach(time => {
                    let days = new Date() - (new Date(time.publish_up)*1000);
                    let daysLeft = Math.ceil((((days / 1000) / 60) / 60) / 24)
                    time.days = daysLeft
                    time.viewsOneDay = Math.round(time.views/daysLeft)
                    time.viewsThreeDays = daysLeft > 3 ? Math.round(time.views/daysLeft)*3 : time.views
                });
                
                //eventBus created by mitt to send data between components 
                window.eventBus.emit('new-data', this.topics)
            
             })
             .catch(error => {
            // handle error
                console.log(error);
            })
            },
                //from json I will use only these 
            extractData({
                id,
                title,
                publish_up,
                views
                })
            {           
                return {id, title, publish_up, views}
            },

        },
            //when component is mounted function getData will be executed 
        mounted() {
            this.getData()
        },
    }


</script>

<style lang="scss" scoped>
</style>