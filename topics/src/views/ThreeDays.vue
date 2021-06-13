<template>
  
  <div class="home">
    <ApiData />
    {{threeDaysSort(ThreeDaysData)}}

    <ol class="olList">
        <!-- for loop to write all topics titles  -->
        <li class="li" v-for="topic in ThreeDaysData" :key="topic.id">
            <p class='listText'>{{ topic.title}}</p>
        </li>
    </ol>

  </div>
</template>

<script>
import ApiData from "@/components/ApiData.vue";


export default {
  name: "Home",
  data() {
    return {
      ThreeDaysData:[]
    }
  },
  components: {
    // HelloWorld,
    ApiData
  },
  created () {
    //data from mitt eventBus will be stored into OneDayData 
    window.eventBus.on('new-data', event => (this.ThreeDaysData = event));
  },
  methods: {
    //sort most recent topics depending on number of views (sorted from hight to low)
    threeDaysSort(objs){
        this.topics = objs.sort((a,b) => (a.viewsThreeDays > b.viewsThreeDays) ? -1 : ((b.viewsThreeDays > a.viewsThreeDays) ? 1 : 0))
    }
  },
};
</script>
