<template>
  
  <div class="home">
    <article>
      <ApiData />
      {{oneDaySort(OneDayData)}}
      
      <ol class="olList">
        <!-- for loop to write all topics titles  -->
          <li class="li" v-for="topic in OneDayData" :key="topic.id">
              <p class='listText'>{{ topic.title }}</p>
          </li>
      </ol>
    </article>
  </div>
</template>

<script>
import ApiData from "@/components/ApiData.vue";


export default {
  name: "Home",
  data() {
    return {
      OneDayData:[]
    }
  },
  components: {
    ApiData
  },
  created () {
    //data from mitt eventBus will be stored into OneDayData 
    window.eventBus.on('new-data', event => (this.OneDayData = event));
  },
  methods: {
    //sort most recent topics depending on number of views (sorted from hight to low)
    oneDaySort(objs){
        this.topics = objs.sort((a,b) => (a.viewsOneDay > b.viewsOneDay) ? -1 : ((b.viewsOneDay > a.viewsOneDay) ? 1 : 0))
    }
  },
};
</script>

<style lang="scss" scoped>

</style>