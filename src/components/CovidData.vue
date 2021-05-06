<template>
    <section id="one">
        <div class="inner">
            <div class="row">
                <!-- Break -->
                <div class="col-4 col-12-medium">
                    <h3>Total Cases in West Bengal</h3>
                    <h2>{{data.confirmed.toLocaleString('en-IN')}}</h2>
                </div>
                <div class="col-4 col-12-medium">
                    <h3>Total Recovered in West Bengal</h3>
                    <h2>{{data.recovered.toLocaleString('en-IN')}}</h2>
                </div>
                <div class="col-4 col-12-medium">
                    <h3>Total Deaths in West Bengal</h3>
                    <h2>{{data.deaths.toLocaleString('en-IN')}}</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
    name: 'CovidData',
    data() {
        return {data:{
            active: 0,
            confirmed: 0,
            deaths: 0
        }}
    },
    mounted() {
        Vue.axios.get('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise').then((res) => {
            this.data = res.data.data.statewise[7]
            console.log(res.data.data.statewise[7]);
        })
    },
}
</script>