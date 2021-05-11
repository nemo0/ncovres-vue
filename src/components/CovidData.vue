<template>
  <section id="one">
    <div class="inner">
      <div class="row">
        <!-- Break -->
        <div class="col-4 col-12-medium">
          <h3>Total Cases in India</h3>
          <h2>{{ data.cases.toLocaleString("en-IN") }}</h2>
        </div>
        <div class="col-4 col-12-medium">
          <h3>Total Recovered in India</h3>
          <h2>{{ data.recovered.toLocaleString("en-IN") }}</h2>
        </div>
        <div class="col-4 col-12-medium">
          <h3>Total Active Cases in India</h3>
          <h2>{{ data.active.toLocaleString("en-IN") }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "CovidData",
  data() {
    return {
      data: {
        cases: 0,
        recovered: 0,
        active: 0,
      },
    };
  },
  mounted() {
    Vue.axios
      .get("https://corona.lmao.ninja/v3/covid-19/countries/india?strict=true")
      .then((res) => {
        this.data = res.data;
      });
  },
};
</script>